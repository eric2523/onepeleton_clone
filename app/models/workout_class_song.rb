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
class WorkoutClassSong < ApplicationRecord
  validates :song_id, :workout_class_id, presence: true 

  belongs_to :song,
    foreign_key: :song_id,
    class_name: :Song

  belongs_to :workout_class,
    foreign_key: :workout_class_id,
    class_name: :WorkoutClass
end
