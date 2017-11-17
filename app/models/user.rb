class User < ApplicationRecord
    has_secure_password

    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :customer_id, presence: true

    def to_token_payload
        {
            id: self.id,
            email: self.email,
            customerId: self.customer_id
        }
    end

    def self.from_token_payload payload
        self.find payload["id"]
  end
end