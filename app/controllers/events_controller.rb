class EventsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def index
    respond_with Event.all
  end

  def create
    respond_with Event.create(post_params)
  end

  def show
    respond_with Event.find(params[:id])
  end

  private
  def post_params
    params.require(:event).permit(:name, :description, :end_time, :member_number)
  end
end
