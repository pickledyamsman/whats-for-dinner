class RestaurantDownvote < ActiveRecord::Base
  belongs_to :restaurant
  belongs_to :user

  validates :restaurant_id, uniqueness: { scope: :user_id }
end
