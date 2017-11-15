class Api::SubscriptionsController < ApplicationController
    before_action :authenticate_user

    def create
        @subscription = Subscription.new(subscription_params)
        @subscription.user = current_user
        if @subscription.save
            render json: @subscription.as_json(except: [:created_at, :updated_at])
        else
            render json: @subscription.errors.full_messages, status: 422
        end
    end

    def index
        @subscriptions = current_user.subscriptions
        render json: @subscriptions.as_json
    private

    def subscription_params
        params.require(:subscription).permit(:membership_plan_id, :cost, :guests)
    end
end