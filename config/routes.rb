Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    post 'user_token' => 'user_token#create'
    resources :users, only: [:create]
    resources :membership_plans, only: [:create, :index]
    resources :subscriptions, only: [:create]
  end
end
