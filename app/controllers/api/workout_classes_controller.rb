class Api::WorkoutClassesController < ApplicationController
  def index
    @workout_classes = WorkoutClass.all
  end

  def show
    @workout_class = WorkoutClass.find(params[:id])
  end
end
