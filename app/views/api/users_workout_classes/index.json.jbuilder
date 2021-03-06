@curr_user_classes.each do |workout_class|
  json.set! workout_class.id do 
    json.extract! workout_class, 
      :id, 
      :name, 
      :date, 
      :skill_level, 
      :category_id,
      :instructor_id, 
      :description
    json.photoUrl url_for(workout_class.photo)
  end
end