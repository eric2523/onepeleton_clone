class CreateApiClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :classes do |t|
      t.string :name, null: false 
      t.datetime :date, null: false 
      t.string :skill_level, null: false 
      t.integer :instructor_id, foreign_key: true 
      t.timestamps
    end

    add_index :classes, :name, unique: true 
    add_index :classes, :instructor_id
  end
end
