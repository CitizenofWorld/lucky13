class TipsController < ApplicationController

  # def show
  #   @tip = Tip.find(params[:id])
  #   # render :show # optional
  # end

  def index
    @tips = Tip.all
  end
  
end
