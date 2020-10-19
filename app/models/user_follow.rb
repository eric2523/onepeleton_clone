# == Schema Information
#
# Table name: user_follows
#
#  id               :bigint           not null, primary key
#  user_id          :integer          not null
#  followed_user_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class UserFollow < ApplicationRecord
  validates :user_id, :followed_user_id, presence: true 

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :followed_user,
    foreign_key: :followed_user_id,
    class_name: :User
end
