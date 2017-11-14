class User < ApplicationRecord
    has_secure_password

    validates :email, :password_digest, presence: true, uniqueness: true

    has_many: :subscriptions
    has_many: :membership_plans, through: :subscriptions
end
