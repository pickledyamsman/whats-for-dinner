class CreateFoodTypes < ActiveRecord::Migration
  def change
    create_table :food_types do |t|
      t.string :type_name
      t.integer :restaurant_id
    end
  end
end
