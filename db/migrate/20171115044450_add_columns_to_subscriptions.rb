class AddColumnsToSubscriptions < ActiveRecord::Migration[5.1]
  def change
    add_column :subscriptions, :cost, :float, null: false
    add_column :subscriptions, :guests, :integer, null: false
  end
end
