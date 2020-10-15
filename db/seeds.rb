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

f1 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/strength/strength-1.jpg")
wc1.photo.attach(io: f1, filename: 'strength-1.jpg')

wc2 = WorkoutClass.create(
  name: "10 min Arms Toning",
  date: DateTime.new(2020, 11, 10, 10, 00, 00),
  skill_level: "Beginner",
  category_id: c1.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ") 
)

f2 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/strength/strength-2.png")
wc2.photo.attach(io: f2, filename: 'strength-2.png')

wc3 = WorkoutClass.create(
  name: "20 min Chest & Back Strength",
  date: Faker::Time.forward(days: 60, period: :all),
  skill_level: "Intermediate",
  category_id: c1.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ") 
)

f3 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/strength/strength-3.jpg")
wc3.photo.attach(io: f3, filename: 'strength-3.jpg')

wc4 = WorkoutClass.create(
  name: "5 min Full Body Warm Up",
  date: Faker::Time.forward(days: 60, period: :all),
  skill_level: "Beginner",
  category_id: c1.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ") 
)

f4 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/strength/strength-4.jpg")
wc4.photo.attach(io: f4, filename: 'strength-4.jpg')

wc5 = WorkoutClass.create(
  name: "20 min Strength for Runners",
  date: Faker::Time.forward(days: 60, period: :all),
  skill_level: "Intermediate",
  category_id: c1.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ") 
)

f5 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/strength/strength-5.jpg")
wc5.photo.attach(io: f5, filename: 'strength-5.jpg')

wc6 = WorkoutClass.create(
  name: "10 min Glutes & Legs Strength",
  date: Faker::Time.forward(days: 60, period: :all),
  skill_level: "Intermediate",
  category_id: c1.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ") 
)

f6 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/strength/strength-6.jpg")
wc6.photo.attach(io: f6, filename: 'strength-6.jpg')

# Yoga classes 

y_wc1 = WorkoutClass.create(
  name: "20 min Power Yoga",
  date: Faker::Time.forward(days: 60, period: :all),
  skill_level: "Intermediate",
  category_id: c5.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ") 
)

y_f1 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/yoga/yoga-1.jpg")
y_wc1.photo.attach(io: y_f1, filename: 'yoga-1.jpg')

y_wc2 = WorkoutClass.create(
  name: "30 min Yoga Flow",
  date: Faker::Time.forward(days: 60, period: :all),
  skill_level: "Intermediate",
  category_id: c5.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ") 
)

y_f2 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/yoga/yoga-2.jpg")
y_wc2.photo.attach(io: y_f2, filename: 'yoga-2.jpg')

y_wc3 = WorkoutClass.create(
  name: "Namaste I am Yoga",
  date: Faker::Time.forward(days: 60, period: :all),
  skill_level: "Intermediate",
  category_id: c5.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ") 
)

y_f3 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/yoga/yoga-3.jpg")
y_wc3.photo.attach(io: y_f3, filename: 'yoga-3.jpg')

y_wc4 = WorkoutClass.create(
  name: "Yoga is Me",
  date: Faker::Time.forward(days: 60, period: :all),
  skill_level: "Intermediate",
  category_id: c5.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ") 
)

y_f4 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/yoga/yoga-4.jpg")
y_wc4.photo.attach(io: y_f4, filename: 'yoga-4.jpg')

y_wc5 = WorkoutClass.create(
  name: "Yoga with Yoda",
  date: Faker::Time.forward(days: 60, period: :all),
  skill_level: "Intense",
  category_id: c5.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ") 
)

y_f5 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/yoga/yoga-5.jpg")
y_wc5.photo.attach(io: y_f5, filename: 'yoga-5.jpg')

y_wc6 = WorkoutClass.create(
  name: "Do you love Yoga this Much?",
  date: Faker::Time.forward(days: 60, period: :all),
  skill_level: "Intermediate",
  category_id: c5.id,
  instructor_id: u1.id,
  description: Faker::Lorem.paragraphs.join(" ") 
)

y_f6 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/yoga/yoga-6.jpg")
y_wc6.photo.attach(io: y_f6, filename: 'yoga-6.jpg')


