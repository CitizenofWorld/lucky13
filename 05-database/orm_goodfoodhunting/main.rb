require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'

require_relative 'db_config'
require_relative 'models/dish'
require_relative 'models/user'

get '/' do
  redirect '/dishes'
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
  erb :show
end

get '/dishes/:id/edit' do
  @dish = Dish.find(params[:id])
  erb :edit
end

put '/dishes/:id' do
  @dish = Dish.find(params[:id])
  dish.name = params[:name]
  dish.image_url = params[:image_url]  
  dish.save
  redirect "/dishes/#{params[:id]}"
end

delete '/dishes/:id' do
  @dish = Dish.find(params[:id])
  @dish.destroy
  redirect "/dishes"
end
