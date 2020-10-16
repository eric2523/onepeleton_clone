class CreateWorkoutClassSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :workout_class_songs do |t|
      t.integer :song_id, null: false 
      t.integer :workout_class_id, null: false  
      t.timestamps
    end

    add_index :workout_class_songs, :song_id
    add_index :workout_class_songs, :workout_class_id
  end
end
