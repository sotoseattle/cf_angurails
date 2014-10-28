Rails.application.routes.draw do
  resources :products, only: [:index, :create, :destroy]
  root 'store#show'
end
