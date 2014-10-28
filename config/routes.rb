Rails.application.routes.draw do
  resources :products, only: :index
  root 'store#show'
end
