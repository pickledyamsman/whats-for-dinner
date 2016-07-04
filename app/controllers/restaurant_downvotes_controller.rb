class RestaurantDownvotesController < ApplicationController

  def create
    restaurant = Restaurant.find(params[:id])
    restaurant.downvote_for(current_user)
    restaurant.restaurant_downvotes.build(user: current_user)
    if restaurant.save
      restaurant.decrement!(:votes)
      render json: restaurant
    else
      render :json => { :errors => restaurant.errors.full_messages }, :status => 422
    end
  end

  def destroy
    restaurant = Restaurant.find(params[:id])
    vote = RestaurantDownvote.find_by(restaurant: restaurant, user: current_user)
    if vote
      restaurant.increment!(:votes)
    end
    respond_with vote.destroy
  end
end