# == Schema Information
#
# Table name: workout_classes
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  date          :datetime         not null
#  skill_level   :string           not null
#  category_id   :integer          not null
#  instructor_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  description   :text             not null
#
class WorkoutClass < ApplicationRecord
  validates :name, :date, :skill_level, :category_id, :instructor_id, presence: true
  validates :description, presence: true 
  validates :name, uniqueness: true 

  belongs_to :category,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :Category

  belongs_to :instructor,
    primary_key: :id,
    foreign_key: :instructor_id,
    class_name: :User

  has_one_attached :photo

  has_many :users_workout_class,
    foreign_key: :workout_class_id,
    class_name: :UsersWorkoutClass
end
