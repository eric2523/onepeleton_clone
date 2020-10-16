# == Schema Information
#
# Table name: workout_class_songs
#
#  id               :bigint           not null, primary key
#  song_id          :integer          not null
#  workout_class_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require 'test_helper'

class WorkoutClassSongTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
