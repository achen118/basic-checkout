class Api::MembershipPlansController < ApplicationController
    before_action :authenticate_user

    def create
        @membership_plan = Membership.new(membership_plan_params)
        if @membership_plan.save
            render json: @membership_plan.as_json(except: [:created_at, :updated_at])
        else
            render json: @membership_plan.errors.full_messages, status: 422
        end
    end

    def index
        @membership_plans = MembershipPlan.all
        render json: @membership_plans.as_json(except: [:created_at, :updated_at])
    end

    private

    def membership_plan_params
        params.require(:membership_plan).permit(:level, :description, :cost, :max_guests, :guest_cost)
    end
end