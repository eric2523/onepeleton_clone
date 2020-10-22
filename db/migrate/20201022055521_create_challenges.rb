class CreateChallenges < ActiveRecord::Migration[5.2]
  def change
    create_table :challenges do |t|
      t.string :name, null: false 
      t.text :description, null: false
      t.datetime :start_date, null: false 
      t.datetime :end_date, null: false 
      t.timestamps
    end

    add_index :challenges, :name, unique: true 
  end
end
