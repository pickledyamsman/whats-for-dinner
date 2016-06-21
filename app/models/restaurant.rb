class Restaurant < ActiveRecord::Base
  belongs_to :event
  serialize :food_type, Array
end
