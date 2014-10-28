Rails.application.routes.draw do
  resources :products, only: [:index, :create, :show, :destroy]
  root 'store#show'
end
