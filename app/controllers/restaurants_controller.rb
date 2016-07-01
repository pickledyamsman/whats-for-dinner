class RestaurantsController < ApplicationController
  before_filter :authenticate_user!, only: [:create, :upvote]
  before_action :set_event

  def create
    restaurant = @event.restaurants.create(restaurant_params)
    respond_with @event, restaurant
  end

  def upvote
    restaurant = @event.restaurants.find(params[:id])
    restaurant.increment!(:votes) # ! saves the record. ActiveRecord method

    respond_with @event, restaurant
  end

  def downvote
    restaurant = @event.restaurants.find(params[:id])
    restaurant.decrement!(:votes) # ! saves the record ActiveRecord method

    respond_with @event, restaurant
  end

  private
    def restaurant_params
      params.require(:restaurant).permit(:name, :location, :avg_price, :event_id, :votes, :food_types)
    end

    def set_event
      @event = Event.find(params[:event_id])
    end
end
