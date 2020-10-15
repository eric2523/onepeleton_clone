json.extract! user, :id, :username, :email, :is_instructor
# json.workout_classes do
#   user.workout_classes.each do |workout_class|
#     json.set! workout_class.id do 
#       json.extract! workout_class,
#         :id,
#         :name 
#     end
#   end
# end