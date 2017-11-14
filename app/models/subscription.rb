class Subscription < ApplicationRecord
    validates :user, :membership_plan, presence: true
    validates :user, uniqueness: { scope: :membership_plan }

    belongs_to: :user
    belongs_to: :membership_plan
end
