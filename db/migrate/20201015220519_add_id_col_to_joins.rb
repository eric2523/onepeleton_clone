class AddIdColToJoins < ActiveRecord::Migration[5.2]
  def change
    add_column :users_workout_classes, :id, :primary_key
  end
end
