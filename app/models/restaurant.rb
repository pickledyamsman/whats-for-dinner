class Restaurant < ActiveRecord::Base

  belongs_to :event
  belongs_to :user

  has_many :restaurant_upvotes, dependent: :destroy
  has_many :restaurant_downvotes, dependent: :destroy
  has_many :upvoted_users, through: :restaurant_upvotes, source: :user
  has_many :downvoted_users, through: :restaurant_downvotes, source: :user


  def as_json(options = {})
    super(options.merge(include: [:user]))
  end
end


