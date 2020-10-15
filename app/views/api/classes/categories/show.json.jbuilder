@workout_classes.each do |workout_class|
  json.set! workout_class.id do 
    json.extract! workout_class, 
      :id, 
      :name, 
      :date, 
      :skill_level, 
      :category_id, 
      :instructor_id, 
      :description
  end
end