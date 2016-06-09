class Event < ActiveRecord::Base
  has_many :restaurants 
  has_many :users

  def as_json(options = {})
    super(options.merge(include: :restaurants))
  end
end
