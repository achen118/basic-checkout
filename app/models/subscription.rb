class Subscription < ApplicationRecord
    validates :user, :membership_plan, :cost, :guests, :stripe_token, presence: true
    validates :user, uniqueness: { scope: :membership_plan }

    belongs_to :user
    belongs_to :membership_plan

    def process_payment
        Stripe::Charge.create(
            :amount => (cost * 100).to_i,
            :currency => "usd",
            :description => membership_plan.level,
            :source => stripe_token,
        )
    end
end
