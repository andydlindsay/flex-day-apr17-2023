Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'login', controller: 'users', action: :index
  # get 'register', to: 'users#index'

  resources :locations
  resources :characters
end
