class AddStripeTokenToSubscriptions < ActiveRecord::Migration[5.1]
  def change
    add_column :subscriptions, :stripe_token, :string, null: false
  end
end
