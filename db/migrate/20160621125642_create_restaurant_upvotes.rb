class CreateRestaurantUpvotes < ActiveRecord::Migration
  def change
    create_table :restaurant_upvotes do |t|
      t.integer :restaurant_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
