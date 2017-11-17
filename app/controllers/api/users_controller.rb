class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        customer = Stripe::Customer.create(
            email: params[:user][:email]
        )
        @user.customer_id = customer.id
        if @user.save
            render status: 200
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end
end
