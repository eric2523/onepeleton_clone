class Api::Classes::CategoriesController < ApplicationController
  def show
    category = Category.find(params[:id])
    @workout_classes = category.workout_classes
  end
end
