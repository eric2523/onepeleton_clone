class CreateWorkoutClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :workout_classes do |t|
      t.string :name, null: false 
      t.datetime :date, null: false 
      t.string :skill_level, null: false 
      t.integer :category_id, null: false 
      t.integer :instructor_id, null: false 
      t.timestamps
    end

    add_index :workout_classes, :name, unique: true 
    add_index :workout_classes, :instructor_id
    add_index :workout_classes, :category_id
  end
end
