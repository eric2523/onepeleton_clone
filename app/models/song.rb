# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  artist     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Song < ApplicationRecord
  validates :name, :artist, presence: true 

  has_many :workout_class_songs,
    foreign_key: :song_id,
    class_name: :WorkoutClassSong
end
