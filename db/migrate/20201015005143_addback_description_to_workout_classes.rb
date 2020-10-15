class AddbackDescriptionToWorkoutClasses < ActiveRecord::Migration[5.2]
  def change
    add_column :workout_classes, :description, :text, null: false
  end
end
