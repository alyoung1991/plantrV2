class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |t|
      t.string :type, null: false
      t.string :name, null: false
      t.integer :age, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
  end
end
