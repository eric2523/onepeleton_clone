# == Schema Information
#
# Table name: challenges
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  start_date  :datetime         not null
#  end_date    :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Challenge < ApplicationRecord
  validates :name, :description, :start_date, :end_date, presence: true 
  validates :name, uniqueness: true 

  has_one_attached :challenge_icon
end
