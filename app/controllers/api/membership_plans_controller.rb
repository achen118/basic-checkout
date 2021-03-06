class Api::MembershipPlansController < ApplicationController
    before_action :authenticate_user

    def index
        render json: Stripe::Plan.list.data
    end

    def show
        render json: Stripe::Plan.retrieve(params[:id])
    end
end