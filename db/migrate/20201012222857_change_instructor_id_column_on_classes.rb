class ChangeInstructorIdColumnOnClasses < ActiveRecord::Migration[5.2]
  def change
    remove_column :classes, :instructor_id
  end
end
