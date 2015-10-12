class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  # Before all controller actions, demand authentication via Devise. This is due to this being an internal
  # facing web app
  before_action :authenticate_user!

end
