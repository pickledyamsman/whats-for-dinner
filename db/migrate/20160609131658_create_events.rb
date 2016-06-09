class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name 
      t.string :description 
      t.datetime :time 
      t.integer :group_id
    end
  end
end
