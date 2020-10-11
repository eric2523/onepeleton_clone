class ApplicationController < ActionController::Base
  helper_method :logged_in?, :current_user, :require_log_in

  skip_before_action :verify_authenticity_token

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
  
  def require_log_in
    redirect_to new_api_session_url unless logged_in?
  end
  
  def login!(user)
    session[:session_token] = user.reset_session_token!
  end
  
  def logged_in?
    !!current_user
  end
  
  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end
