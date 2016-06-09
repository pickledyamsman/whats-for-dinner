class RestaurantsController < ApplicationController
  
  def index
    @restaurants = Restaurant.all
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end

  def create
    @restaurant = Restaurant.new(restaurant_params)
  end

  private
    def restaurant_params
      
    end

end
