class ApplicationController < ActionController::API
    include Knock::Authenticable

    private
  
    def authenticate_api_user
        authenticate_for Api::User
    end
end
