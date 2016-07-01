class FoodType < ActiveRecord::Base
  belongs_to :restaurant

  def as_json(options = {})
    super(options.merge(include: [:user]))
  end
end