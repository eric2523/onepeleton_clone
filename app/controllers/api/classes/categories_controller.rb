class Api::Classes::CategoriesController < ApplicationController
  def show
    category_name = params[:id].capitalize
    category = Category.find_by(name: category_name)
    @workout_classes = category.workout_classes
  end
end
