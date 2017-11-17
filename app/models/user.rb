class User < ApplicationRecord
    has_secure_password

    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :customer_id, presence: true
end