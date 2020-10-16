class Api::SongsController < ApplicationController
  def index
    workout_class = WorkoutClass.find(params[:workout_class_id])
    @songs = workout_class.songs 
  end
end
