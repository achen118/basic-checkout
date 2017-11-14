class Api::SubscriptionsController < ApplicationController
    before_action :authenticate_api_user

    def create
        @subscription = Subscription.new(subscription_params)
        if @subscription.save
            render json: @subscription.as_json(only: [:membership_plan_id])
        else
            render json: @subscription.errors.full_messages, status: 422
        end
    end

    private

    def subscription_params
        params.require(:subscription).permit(:user_id, :membership_plan_id)
    end
end