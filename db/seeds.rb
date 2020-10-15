# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
require 'open-uri'

User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')

# seed Users
u1 = User.create(
  username: Faker::Internet.user_name,
  email: Faker::Internet.safe_email,
  password: Faker::Internet.password(min_length: 6, max_length: 6),
  is_instructor: true  
)
u2 = User.create(
  username: Faker::Internet.user_name,
  email: Faker::Internet.safe_email,
  password: Faker::Internet.password(min_length: 6, max_length: 6),
  is_instructor: false  
)
u3 = User.create(
  username: Faker::Internet.user_name,
  email: Faker::Internet.safe_email,
  password: Faker::Internet.password(min_length: 6, max_length: 6),
  is_instructor: false  
)

demo_user = User.create(
  username: "demouser",
  email: "demoemail@example.com",
  password: "demopassword123",
  is_instructor: false 
)

Category.destroy_all
Category.connection.execute('ALTER SEQUENCE categories_id_seq RESTART WITH 1')

# seed Categories
c1 = Category.create(
  name: "Strength"
)
c2 = Category.create(
  name: "Cycling"
)

c3 = Category.create(
  name: "Meditation"
)

c4 = Category.create(
  name: "Cardio"
)

c5 = Category.create(
  name: "Yoga"
)

c6 = Category.create(
  name: "Stretching"
)

WorkoutClass.destroy_all
WorkoutClass.connection.execute('ALTER SEQUENCE workout_classes_id_seq RESTART WITH 1')

# seed Workout Classes
wc1 = WorkoutClass.create(
  name: "20 min Full Body Strength",
  date: DateTime.new(2020, 12, 23, 8, 00, 00),
  skill_level: "Intermediate",
  category_id: c1.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ")
)

# f1 = open("s3://active-storage-unopeleton-seeds/strength/strength-1.jpg")
# wc1.photo.attach(io: f1, filename: 'strength-1.jpg')

wc2 = WorkoutClass.create(
  name: "10 min Arms Toning",
  date: DateTime.new(2020, 11, 10, 10, 00, 00),
  skill_level: "Beginner",
  category_id: c1.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ") 
)

