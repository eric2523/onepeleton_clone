class AddColumnsToClasses < ActiveRecord::Migration[5.2]
  def change
    add_column :classes, :instructor_id, :integer, null: false
    add_index :classes, :instructor_id
    add_index :classes, :category_id 
  end
end
