class Api::TokensController < ApplicationController 
  def index
    client_id = Rails.application.credentials.spot[:client_id]
    client_secret = Rails.application.credentials.spot[:client_secret]
    
    @encoded_token = Base64.encode64("#{client_id}:#{client_id}")
  end
end