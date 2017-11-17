class MembershipPlan < ApplicationRecord
    validates :level, :description, :cost, :guest_cost, presence: true

    has_many :subscriptions
    has_many :users, through: :subscriptions
end
