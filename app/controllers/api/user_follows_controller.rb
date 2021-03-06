class Api::UserFollowsController < ApplicationController 
  def index
    user = User.find(params[:user_id])
    @user_follows = user.following_users
    @user_followees = user.followees
  end

  def create
    @user_follow = UserFollow.new(
      user_id: current_user.id,
      followed_user_id: params[:user_id]
      )

    if @user_follow.save
      render :show
    else
      render json: ["Unable to follow User"]
    end
  end

  def destroy
    @user_follow = UserFollow.find(params[:id])
    @user_follow.destroy 
    render :show
  end

end

  