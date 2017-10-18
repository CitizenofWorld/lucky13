class Api::CommentsController < ApplicationController

  def create
    comment = Comment.new
    comment.dish_id = params[:dish_id]
    comment.body = params[:body]
    if comment.save
      render json: comment
    else
      render json: comment.errors
    end
  end

end