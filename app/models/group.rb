class Group < ActiveRecord::Base
  has_many :events
  has_many :users
end
