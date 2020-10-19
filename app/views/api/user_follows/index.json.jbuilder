json.following do 
  @user_follows.each do |user_follow|
    json.set! user_follow.id do 
      json.partial! 'user_follow', user_follow: user_follow
    end
  end
end 

json.followers do 
  @user_followees.each do |user_followee|
    json.set! user_followee.id do 
      json.partial! 'user_follow', user_follow: user_followee
    end
  end
end
