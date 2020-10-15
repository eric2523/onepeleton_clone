json.partial! 'user', user: @user
# @user.workout_classes.each do |workout_class|
#       json.set! workout_class.id do 
#         json.extract! workout_class,
#           :id,
#           :name 
#       end
#     end