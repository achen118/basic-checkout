Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    post 'user_token' => 'user_token#create'
    resources :users, only: [:create]
    resources :membership_plans, only: [:index, :show]
    resources :subscriptions, only: [:create, :index]
  end
end
