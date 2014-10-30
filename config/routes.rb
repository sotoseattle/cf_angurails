Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :products, only: [:index, :create, :update, :destroy]
      resources :categories, only: :index
      resources :genres
    end
  end

  get 'admin/index'
  root 'store#show'
end
