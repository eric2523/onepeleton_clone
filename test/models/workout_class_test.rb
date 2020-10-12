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
#
require 'test_helper'

class WorkoutClassTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
