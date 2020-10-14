class Api::WorkoutClassesController < ApplicationController
  # def index
  #   @workout_classes = WorkoutClass.all
  # end

  def show
    @workout_class = WorkoutClass.find(params[:id])
    
    # @workout_class.date.strftime("%a %m/%d/%y @ %I:%M %p")
  end

  private
  def workout_class_params
    params.require(:workout_classes).permit(:user_id)
  end
end
