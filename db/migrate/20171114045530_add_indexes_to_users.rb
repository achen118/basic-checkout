class AddIndexesToUsers < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :email, unique: true
    add_index :users, :password_digest, unique: true
  end
end
