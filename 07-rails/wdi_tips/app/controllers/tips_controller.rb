class TipsController < ApplicationController

  def new
  end

  def edit
    @tip = Tip.find(params[:id])
  end

  def update
    tip = Tip.find(params[:id])
    tip.title = params[:title]
    tip.content = params[:content]
    tip.save
    redirect_to "/tips/#{tip.id}"
  end

  def create
    tip = Tip.new
    tip.title = params[:title]
    tip.content = params[:content]
    tip.save
    redirect_to '/tips'
  end

  def show
    @tip = Tip.find(params[:id])
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
    @content_html = markdown.render(@tip.content)
  end

  def index
    @tips = Tip.all
  end

end
