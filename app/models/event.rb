class Event < ActiveRecord::Base
  belongs_to :group 
  has_many :restaurants 
  has_many :users, through: :groups
end
