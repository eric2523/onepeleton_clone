@curr_user_classes.each do |workout_class|
  json.set! workout_class.workout_class_id do 
    json.extract! workout_class, :user_id, :workout_class_id
  end
end