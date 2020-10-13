class Api::WorkoutClassesController < ApplicationController
  # def index
  #   @workout_classes = WorkoutClass.all
  # end

  def show
    @workout_class = WorkoutClass.find(params[:id])
  end

  private
  def workout_class_params
    params.require(:workout_classes).permit(:user_id)
  end
end
