class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :type
      t.string :location
      t.integer :avg_price
      t.integer :event_id

      t.timestamps null: false
    end
  end
end
