Rails.application.routes.draw do
  # resources :tips
  get '/tips/new', to: 'tips#new'
  get '/tips/:id', to: 'tips#show'
  get '/tips', to: 'tips#index'
  post '/tips', to: 'tips#create'

                  # controller # action / method 
                  # pages_controller.rb # def about
  get '/about', to: 'pages#about'
  get '/contact_us', to: 'pages#contact'
end
