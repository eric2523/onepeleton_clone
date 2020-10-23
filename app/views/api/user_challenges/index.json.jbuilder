@user_challenges.each do |user_challenge|
  json.set! user_challenge.id do 
    json.partial! 'user_challenge', user_challenge: user_challenge
  end
end