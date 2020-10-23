class Api::UserChallengesController < ApplicationController
  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      @user_challenges = user.user_challenges
    else  
      @user_challenges = UserChallenge.all
    end
  end

  def create
    @user_challenge = UserChallenge.new(
      user_id: current_user.id,
      challenge_id: params[:challenge_id]
    )

    if (@user_challenge.save)
      render :show
    else
      render json: ["Can't follow challenge"]
    end
  end

  def destroy
    @user_challenge = UserChallenge.find(params[:id])
    @user_challenge.destroy 
    render :show
  end

end
