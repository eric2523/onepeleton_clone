@challenges.each do |challenge|
  json.set! challenge.id do
    json.partial! 'challenge', challenge: challenge
  end
end