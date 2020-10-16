class Api::UsersWorkoutClassesController < ApplicationController
  def create
    @new_user_workout_class = UsersWorkoutClass.new(
      user_id: current_user.id,
      workout_class_id: users_classes_params[:workout_class_id]
    )
    if @new_user_workout_class.save
      redirect_to api_users_workout_class_url(@new_user_workout_class)
    else
      render json: ['You already joined this class'], status: 401
    end
  end

  def show
    @new_user_workout_class = UsersWorkoutClass.find(params[:id])
  end

  def index
    @curr_user_classes = current_user.users_workout_class 
  end

  def destroy
    @new_user_workout_class = UsersWorkoutClass.find_by(workout_class_id: params[:id])
    @new_user_workout_class.destroy 
    render :show
  end

  private
  def users_classes_params
    params.require(:workout_class).permit(:workout_class_id)
  end
end