class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :food_types
      t.string :location
      t.integer :avg_price
      t.integer :event_id
      t.integer :votes

      t.timestamps null: false
    end
  end
end
