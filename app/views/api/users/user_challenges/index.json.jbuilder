@users_challeges.each do |user_challege|
  json.set! user_challege.id do 
    user_challenge.extract! :id, :user_id, :challenge_id 
  end
end