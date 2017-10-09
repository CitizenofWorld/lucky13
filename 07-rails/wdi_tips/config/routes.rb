Rails.application.routes.draw do
  resources :tips, only: [:show, :index]
  # get '/tips/:id', to: 'tips#show'
  # get '/tips', to: 'tips#index'

                  # controller # action / method 
                  # pages_controller.rb # def about
  get '/about', to: 'pages#about'

                        # pages_controller.rb # def contact
  get '/contact_us', to: 'pages#contact'
end
