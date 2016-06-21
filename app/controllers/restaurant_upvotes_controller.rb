class RestaurantUpvotesController < ApplicationController

  def create
    restaurant = Restaurant.find(params[:id])
    restaurant.restaurant_upvotes.build(user: current_user)
    if restaurant.save
      restaurant.increment!(:votes)
      render json: restaurant
    else
      render :json => { :errors => restaurant.errors.full_messages }, :status => 422
    end
  end

  def destroy
    restaurant = Restaurant.find(params[:id])
    vote = RestaurantUpvote.find_by(restaurant: restaurant, user: current_user)
    if vote
      restaurant.decrement!(:votes)
    end
    respond_with vote.destroy
  end
end