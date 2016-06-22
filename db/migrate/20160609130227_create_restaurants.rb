class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.text :food_types, array: true, default: []
      t.string :location
      t.integer :avg_price
      t.integer :event_id
      t.integer :votes

      t.timestamps null: false
    end
  end
end
