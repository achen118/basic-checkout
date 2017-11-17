class Subscription < ApplicationRecord
    validates :user, :membership_plan, :cost, :guests, :stripe_token, presence: true
    validates :user, uniqueness: { scope: :membership_plan }

    belongs_to :user
    belongs_to :membership_plan

    def process_payment
        customer = Stripe::Customer.create(email: user.email, card: stripe_token)
        Stripe::Charge.create(
            customer: customer.id,
            amount: cost * 100,
            description: :membership_plan.level,
            currency: 'usd'
        )
    end
end
