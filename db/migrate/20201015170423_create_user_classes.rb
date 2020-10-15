class CreateUserClasses < ActiveRecord::Migration[5.2]
  def change
    create_join_table :users, :workout_classes do |t|
      t.index [:user_id, :workout_class_id ]
      t.index [:workout_class_id, :user_id]
      t.timestamps
    end
  end
end
