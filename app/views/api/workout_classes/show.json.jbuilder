# json.extract! @workout_class, 
#   :id, 
#   :name, 
#   :date, 
#   :skill_level, 
#   :category_id,
#   :instructor_id, 
#   :description
# json.photoUrl url_for(@workout_class.photo)
json.partial! 'workout_class', workout_class: @workout_class