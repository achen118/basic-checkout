class AddIndexesToSubscriptions < ActiveRecord::Migration[5.1]
  def change
    add_index :subscriptions, :user_id
    add_index :subscriptions, :membership_plan_id
    add_index :subscriptions, [:user_id, :membership_plan_id], unique: true
  end
end
