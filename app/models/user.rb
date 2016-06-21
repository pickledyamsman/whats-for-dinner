class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :events

  has_many :restaurant_upvotes, dependent: :destroy
  has_many :upvoted_restaurants, through: :restaurant_upvotes, source: :restaurant
  has_many :restaurant_downvotes, dependent: :destroy
  has_many :downvoted_restaurants, through: :restaurant_downvotes, source: :restaurant
end
