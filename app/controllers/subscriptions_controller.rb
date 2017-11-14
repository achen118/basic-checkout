class SubscriptionsController < ApplicationController
    before_action :authenticate_user

    def create
        @subscription = Subscription.new(subscription_params)
        if @subscription.save
            render json: @subscription
        else
            render json: @subscription.errors.full_messages, status: 422
        end
    end

    def index
        @subscriptions = Subscription.all
    end

    private

    def subscription_params
        params.require(:subscription).permit(:user_id, :membership_plan_id)
    end
end
