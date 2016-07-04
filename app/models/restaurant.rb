class Restaurant < ActiveRecord::Base

  belongs_to :event
  belongs_to :user

  has_many :restaurants_food_types, dependent: :destroy
  has_many :food_types, :through => :restaurants_food_types


  def as_json(options = {})
    super(options.merge(include: [:food_types]))
  end

  # remove the column food_type from the schema so that there is no food_type= method provided by rails
  def food_type=(food_types)
    food_types #=> [{:id => 1, :name => "Thai"}, {:id => 2 =>  :name => "Chineese"}]

    food_types.each do |food_type|
      food_type = FoodType.find_or_create_by(:name => food_type[:name])
      self.restaurants_food_types.create(:food_type => food_type)
    end
  end
end


