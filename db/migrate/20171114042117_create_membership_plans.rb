class CreateMembershipPlans < ActiveRecord::Migration[5.1]
  def change
    create_table :membership_plans do |t|
      t.string :level, null: false
      t.string :description, null: false
      t.float :cost, null: false
      t.integer :num_free_guests, null: false
      t.timestamps
    end
  end
end
