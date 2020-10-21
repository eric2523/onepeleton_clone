json.extract! user, :id, :username, :email, :is_instructor
if !user.profile_photo.attached? 
  json.photoUrl image_url("blank-profile-picture.png")
else
  json.photoUrl url_for(user.profile_photo)
end
