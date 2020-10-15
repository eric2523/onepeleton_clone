class AddDescriptionColToWorkouts < ActiveRecord::Migration[5.2]
  def change
    add_column :workout_classes, :description, :text
  end
end
