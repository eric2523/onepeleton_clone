@workout_classes.each do |workout_class| 
  json.set! workout_class.id do 
    json.partial! 'workout_class', workout_class: workout_class
  end
end