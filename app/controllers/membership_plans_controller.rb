class MembershipPlansController < ApplicationController
    before_action :authenticate_user

    def create
        @membership_plan = Membership.new(membership_plan_params)
        if @membership_plan.save
            render json: @membership_plan
        else
            render json: @membership_plan.errors.full_messages, status: 422
        end
    end

    def index
        @membership_plans = MembershipPlan.all
    end

    private

    def membership_plan_params
        params.require(:membership_plan).permit(:level, :description, :cost, :num_free_guests)
    end
end
