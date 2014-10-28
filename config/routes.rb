Rails.application.routes.draw do
  resources :products, only: [:index, :create, :show]
  root 'store#show'
end
