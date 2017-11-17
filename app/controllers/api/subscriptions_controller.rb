class Api::SubscriptionsController < ApplicationController
    before_action :authenticate_user

    def create
        customer = Stripe::Customer.retrieve(current_user.customer_id)
        # if customer.subscriptions.total_count > 0 
        #     @subscription = Stripe::Subscription.retrieve(customer.subscriptions.data.first)
        #     subscription.tax_percent = 10
        #     subscription.save

        # else
            @subscription = Stripe::Subscription.create(
                customer: current_user.customer_id,
                trial_period_days: 15,
                items: [
                    {
                        plan: params[:subscription][:membership_plan_id],
                        quantity: params[:subscription][:membership_plan_quantity]
                    }
                ],
                metadata: {
                    guests: params[:subscription][:guests]
                }
            )        
        # end
        render json: @subscription
    end

    def index
        render json: Stripe::Subscription.list(customer: current_user.customer_id).data
    end

    private

    def subscription_params
        params.require(:subscription).permit(:membership_plan_id, :membership_plan_quantity, :guests)
    end
end