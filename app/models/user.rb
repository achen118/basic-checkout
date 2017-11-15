class User < ApplicationRecord
    has_secure_password

    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :subscriptions
    has_many :membership_plans, through: :subscriptions

    def to_token_payload
        {
            id: self.id,
            email: self.email
        }
    end

    def self.from_token_payload payload
        self.find payload["id"]
  end
end