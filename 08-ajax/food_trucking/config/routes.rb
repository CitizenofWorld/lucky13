Rails.application.routes.draw do
  resources :likes
  resources :dishes
  resources :users

  get '/api/dishes', to: 'api/dishes#index'
  post '/api/likes', to: 'api/likes#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
