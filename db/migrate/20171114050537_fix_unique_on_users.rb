class FixUniqueOnUsers < ActiveRecord::Migration[5.1]
  def change
    remove_index :users, :password_digest
  end
end
