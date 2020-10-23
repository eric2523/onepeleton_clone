# == Schema Information
#
# Table name: user_challenges
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  challenge_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class UserChallenge < ApplicationRecord
  validates :user_id, :challenge_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :challenge,
    foreign_key: :challenge_id,
    class_name: :Challenge
end
