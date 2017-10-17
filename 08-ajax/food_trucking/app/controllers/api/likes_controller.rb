class Api::LikesController < ApplicationController

  def create
    like = Like.new
    like.dish_id = params[:dish_id]
    like.user_id = User.first.id # todo must fix
    if like.save
      likes_count = Dish.find(like.dish_id).likes.count
      render json: { likes_count: likes_count }
    else
      render json: { fail: 'something went wrong' }
    end
  end

end