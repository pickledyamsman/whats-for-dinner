class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name 
      t.string :description 
      t.datetime :end_time
      t.integer :member_number 
    end
  end
end
