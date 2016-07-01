class Restaurant < ActiveRecord::Base

  belongs_to :event
  belongs_to :user

  has_many :food_types, dependent: :destroy


  def as_json(options = {})
    super(options.merge(include: [:food_types]))
  end
end
