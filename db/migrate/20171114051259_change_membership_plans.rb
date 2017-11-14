class ChangeMembershipPlans < ActiveRecord::Migration[5.1]
  def change
    rename_column :membership_plans, :num_free_guests, :max_guests
    add_column :membership_plans, :guest_cost, :float, null: false
    change_column :membership_plans, :max_guests, :integer, null: true
  end
end
