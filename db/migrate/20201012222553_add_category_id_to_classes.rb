class AddCategoryIdToClasses < ActiveRecord::Migration[5.2]
  def change
    add_column :classes, :category_id, :integer, null: false 
  end
end
