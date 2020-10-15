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

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :password_digest, :session_token, uniqueness: true 
  validates :is_instructor, inclusion: {in: [true, false]}
  validates :password, length: {minimum: 6}, allow_nil: true 

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
end
