class EditDescriptionColInWorkouts < ActiveRecord::Migration[5.2]
  def change
    remove_column :workout_classes, :description
  end
end
