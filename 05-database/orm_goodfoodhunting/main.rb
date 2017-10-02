require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

require_relative 'db_config'
require_relative 'models/dish'
require_relative 'models/user'
require_relative 'models/comment'

enable :sessions # sinatra provides this feature

helpers do

  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    if current_user
      return true
    else
      return false
    end
  end

end

get '/' do
  erb :index
end

get '/dishes' do
  @dishes = Dish.all
  erb :dishes
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  dish = Dish.new
  dish.name = params[:name]
  dish.image_url = params[:image_url]  
  dish.save
  redirect '/dishes'
end

# url: localhost:4567/dishes/3
get '/dishes/:id' do
  @dish = Dish.find(params[:id])
  @comments = Comment.where(dish_id: params[:id])
  erb :show
end

get '/dishes/:id/edit' do
  @dish = Dish.find(params[:id])
  erb :edit
end

put '/dishes/:id' do
  dish = Dish.find(params[:id])
  dish.name = params[:name]
  dish.image_url = params[:image_url]  
  dish.save
  redirect "/dishes/#{params[:id]}"
end

delete '/dishes/:id' do
  redirect '/login' unless logged_in?

  @dish = Dish.find(params[:id])
  @dish.destroy
  redirect "/dishes"
end

#========================

get '/login' do
  @message = ''
  erb :login
end

post '/session' do
  # find the user
  user = User.find_by(email: params[:email])

  # if found a user
  if user && user.authenticate(params[:password])
    # sucessful create session then redirect
    session[:user_id] = user.id
    redirect '/dishes' 
  else
    @message = 'incorrect email or password'
    erb :login
  end
end

delete '/session' do
  session[:user_id] = nil
  redirect '/login'
end

post '/comments' do 
  redirect '/login' unless logged_in?
  
  comment = Comment.new
  comment.body = params[:body]
  comment.dish_id = params[:dish_id]
  comment.user_id = current_user.id
  comment.save 
  redirect "/dishes/#{params[:dish_id]}"
end