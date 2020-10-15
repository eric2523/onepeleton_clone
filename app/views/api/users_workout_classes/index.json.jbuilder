@curr_user_classes.each do |workout_class|
  json.set! workout_class.id do 
    json.extract! workout_class, :id, :user_id, :workout_class_id
  end
end