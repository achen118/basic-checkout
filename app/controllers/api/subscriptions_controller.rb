class Api::SubscriptionsController < ApplicationController
    before_action :authenticate_user

    def create
        customer = Stripe::Customer.retrieve(current_user.customer_id)
        if customer.subscriptions.total_count > 0 
            @subscription = Stripe::Subscription.retrieve(customer.subscriptions.data.first.id)
            Stripe::SubscriptionItem.create(
                subscription: @subscription.id,
                plan: params[:subscription][:membership_plan_id],
                quantity: params[:subscription][:quantity],
                prorate: false
            )
            @subscription = Stripe::Subscription.retrieve(@subscription.id)
        else
            @subscription = Stripe::Subscription.create(
                customer: current_user.customer_id,
                trial_period_days: 15,
                source: params[:subscription][:stripe_token],
                items: [
                    {
                        plan: params[:subscription][:membership_plan_id],
                        quantity: params[:subscription][:quantity]
                    }
                ]
            )        
        end
        render json: @subscription
    end

    def index
        render json: Stripe::Subscription.list(customer: current_user.customer_id).data.first
    end
end