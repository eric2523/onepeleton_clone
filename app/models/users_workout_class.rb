# == Schema Information
#
# Table name: users_workout_classes
#
#  user_id          :bigint           not null
#  workout_class_id :bigint           not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  id               :bigint           not null, primary key
#
class UsersWorkoutClass < ApplicationRecord
  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :workout_class,
    foreign_key: :workout_class_id,
    class_name: :WorkoutClass
end
