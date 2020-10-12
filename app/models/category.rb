# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Category < ApplicationRecord
  validates :name, presence: true, uniqueness: true 

  has_many :workout_classes,
    primary_key: :id,
    foreign_key: :category_id,
    class_name: :WorkoutClass
end
