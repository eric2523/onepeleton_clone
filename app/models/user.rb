# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  is_instructor   :boolean          default(FALSE), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, :password_digest, :session_token, uniqueness: true 
  validates :is_instructor, inclusion: {in: [true, false]}
  validates :password, length: {minimum: 6}, allow_nil: true 
  validates :email, presence: true, 'valid_email_2/email': true

  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    if @user && @user.is_password?(password)
      @user
     else
      nil
    end
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  has_many :teaching_classes,
    primary_key: :id,
    foreign_key: :instructor_id,
    class_name: :WorkoutClass

  has_many :users_workout_class,
    foreign_key: :user_id,
    class_name: :UsersWorkoutClass

  has_many :workout_classes,
    through: :users_workout_class,
    source: :workout_class

  has_many :following_users,
    foreign_key: :user_id,
    class_name: :UserFollow

  has_many :followees,
    foreign_key: :followed_user_id,
    class_name: :UserFollow

  has_many :users_followed,
    through: :following_users,
    source: :followed_user

  has_many :followers,
    through: :followees,
    source: :user

  has_one_attached :profile_photo

  has_many :user_challenges,
    foreign_key: :user_id,
    class_name: :UserChallenge

  has_many :followed_challenges,
    through: :user_challenges,
    source: :challenge
end
