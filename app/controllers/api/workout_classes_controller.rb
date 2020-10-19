class Api::WorkoutClassesController < ApplicationController
  def index
    @workout_classes = WorkoutClass.order('workout_classes.date ASC').limit(3)
  end

  def show
    @workout_class = WorkoutClass.find(params[:id])
  end

  private
  def workout_class_params
    params.require(:workout_classes).permit(:user_id)
  end
end
