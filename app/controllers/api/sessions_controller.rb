class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password])
    if @user 
      login!(@user)
      redirect_to api_user_url(@user)
    else
      render json: ['Invalid username or password.'], status: 401
    end
  end

  def destroy
    logout!
    render json: {}
  end
end
