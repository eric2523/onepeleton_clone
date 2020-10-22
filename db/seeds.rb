# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
# require 'open-uri'

# User.destroy_all
# User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')

# # seed instructors
# u1 = User.create(
#   username: Faker::Internet.user_name,
#   email: Faker::Internet.safe_email,
#   password: Faker::Internet.password(min_length: 6, max_length: 6),
#   is_instructor: true  
# )

# uf1 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/profilepics/instructor-1.jpeg")
# u1.profile_photo.attach(io: uf1, filename: 'instructor-1.jpeg')

# u2 = User.create(
#   username: Faker::Internet.user_name,
#   email: Faker::Internet.safe_email,
#   password: Faker::Internet.password(min_length: 6, max_length: 6),
#   is_instructor: true 
# )

# uf2 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/profilepics/instructor-2.jpeg")
# u2.profile_photo.attach(io: uf2, filename: 'instructor-2.jpeg')


# u3 = User.create(
#   username: Faker::Internet.user_name,
#   email: Faker::Internet.safe_email,
#   password: Faker::Internet.password(min_length: 6, max_length: 6),
#   is_instructor: true 
# )

# uf3 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/profilepics/instructor-3.jpeg")
# u3.profile_photo.attach(io: uf3, filename: 'instructor-3.jpeg')

# u4 = User.create(
#   username: Faker::Internet.user_name,
#   email: Faker::Internet.safe_email,
#   password: Faker::Internet.password(min_length: 6, max_length: 6),
#   is_instructor: true  
# )

# uf4 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/profilepics/instructor-4.jpeg")
# u4.profile_photo.attach(io: uf4, filename: 'instructor-4.jpeg')

# u5 = User.create(
#   username: Faker::Internet.user_name,
#   email: Faker::Internet.safe_email,
#   password: Faker::Internet.password(min_length: 6, max_length: 6),
#   is_instructor: true 
# )

# uf5 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/profilepics/instructor-5.jpeg")
# u5.profile_photo.attach(io: uf5, filename: 'instructor-5.jpeg')

# u6 = User.create(
#   username: Faker::Internet.user_name,
#   email: Faker::Internet.safe_email,
#   password: Faker::Internet.password(min_length: 6, max_length: 6),
#   is_instructor: true 
# )

# uf6 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/profilepics/instructor-6.jpeg")
# u6.profile_photo.attach(io: uf6, filename: 'instructor-6.jpeg')

# # seed users

# u7 = User.create(
#   username: "pro_hunter_gon",
#   email: "prohuntergon@example.com",
#   password: Faker::Internet.password(min_length: 6, max_length: 6),
#   is_instructor: false
# )

# uf7 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/profilepics/gon.jpg")
# u7.profile_photo.attach(io: uf7, filename: 'gon.jpg')

# u8 = User.create(
#   username: "davidbikes123",
#   email: "david123@example.com",
#   password: Faker::Internet.password(min_length: 6, max_length: 6),
#   is_instructor: false
# )

# uf8 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/profilepics/david.jpg")
# u8.profile_photo.attach(io: uf8, filename: 'david.jpg')

# u9 = User.create(
#   username: "waterbender5",
#   email: "waterbender5@example.com",
#   password: Faker::Internet.password(min_length: 6, max_length: 6),
#   is_instructor: false
# )

# uf9 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/profilepics/katara.png")
# u9.profile_photo.attach(io: uf9, filename: 'katara.png')

# u10 = User.create(
#   username: "goldenstatelyfe",
#   email: "goldenstatelyfe@example.com",
#   password: Faker::Internet.password(min_length: 6, max_length: 6),
#   is_instructor: false
# )

# uf10 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/profilepics/klay.jpg")
# u10.profile_photo.attach(io: uf10, filename: 'klay.jpg')

# u11 = User.create(
#   username: "morgan568",
#   email: "morgan568@example.com",
#   password: Faker::Internet.password(min_length: 6, max_length: 6),
#   is_instructor: false
# )

# uf11 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/profilepics/morgan.jpg")
# u11.profile_photo.attach(io: uf11, filename: 'morgan.jpg')

# u12 = User.create(
#   username: "naomiosaka7",
#   email: "tennisfam@example.com",
#   password: Faker::Internet.password(min_length: 6, max_length: 6),
#   is_instructor: false
# )

# uf12 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/profilepics/naomi.jpg")
# u12.profile_photo.attach(io: uf12, filename: 'naomi.jpg')

# # seed demo
# demo_user = User.create(
#   username: "demouser",
#   email: "demoemail@example.com",
#   password: "demopassword123",
#   is_instructor: false
# )

# Category.destroy_all
# Category.connection.execute('ALTER SEQUENCE categories_id_seq RESTART WITH 1')

# # seed Categories
# c1 = Category.create(
#   name: "Strength"
# )
# c2 = Category.create(
#   name: "Cycling"
# )

# c3 = Category.create(
#   name: "Meditation"
# )

# c4 = Category.create(
#   name: "Cardio"
# )

# c5 = Category.create(
#   name: "Yoga"
# )

# c6 = Category.create(
#   name: "Stretching"
# )

# WorkoutClass.destroy_all
# WorkoutClass.connection.execute('ALTER SEQUENCE workout_classes_id_seq RESTART WITH 1')

# # seed Workout Classes
# wc1 = WorkoutClass.create(
#   name: "20 min Full Body Strength",
#   date: DateTime.new(2020, 12, 23, 8, 00, 00),
#   skill_level: "Intermediate",
#   category_id: c1.id,
#   instructor_id: u1.id,
#   description: Faker::Lorem.paragraphs.join(" ")
# )

# f1 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/strength/strength-1.jpg")
# wc1.photo.attach(io: f1, filename: 'strength-1.jpg')

# wc2 = WorkoutClass.create(
#   name: "10 min Arms Toning",
#   date: DateTime.new(2020, 11, 10, 10, 00, 00),
#   skill_level: "Beginner",
#   category_id: c1.id,
#   instructor_id: u1.id,
#   description: Faker::Lorem.paragraphs.join(" ") 
# )

# f2 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/strength/strength-2.png")
# wc2.photo.attach(io: f2, filename: 'strength-2.png')

# wc3 = WorkoutClass.create(
#   name: "20 min Chest & Back Strength",
#   date: Faker::Time.forward(days: 60, period: :all),
#   skill_level: "Intermediate",
#   category_id: c1.id,
#   instructor_id: u2.id,
#   description: Faker::Lorem.paragraphs.join(" ") 
# )

# f3 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/strength/strength-3.jpg")
# wc3.photo.attach(io: f3, filename: 'strength-3.jpg')

# wc4 = WorkoutClass.create(
#   name: "5 min Full Body Warm Up",
#   date: Faker::Time.forward(days: 60, period: :all),
#   skill_level: "Beginner",
#   category_id: c1.id,
#   instructor_id: u2.id,
#   description: Faker::Lorem.paragraphs.join(" ") 
# )

# f4 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/strength/strength-4.jpg")
# wc4.photo.attach(io: f4, filename: 'strength-4.jpg')

# wc5 = WorkoutClass.create(
#   name: "20 min Strength for Runners",
#   date: Faker::Time.forward(days: 60, period: :all),
#   skill_level: "Intermediate",
#   category_id: c1.id,
#   instructor_id: u2.id,
#   description: Faker::Lorem.paragraphs.join(" ") 
# )

# f5 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/strength/strength-5.jpg")
# wc5.photo.attach(io: f5, filename: 'strength-5.jpg')

# wc6 = WorkoutClass.create(
#   name: "10 min Glutes & Legs Strength",
#   date: Faker::Time.forward(days: 60, period: :all),
#   skill_level: "Intermediate",
#   category_id: c1.id,
#   instructor_id: u3.id,
#   description: Faker::Lorem.paragraphs.join(" ") 
# )

# f6 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/strength/strength-6.jpg")
# wc6.photo.attach(io: f6, filename: 'strength-6.jpg')

# # Yoga classes 

# y_wc1 = WorkoutClass.create(
#   name: "20 min Power Yoga",
#   date: Faker::Time.forward(days: 60, period: :all),
#   skill_level: "Intermediate",
#   category_id: c5.id,
#   instructor_id: u3.id,
#   description: Faker::Lorem.paragraphs.join(" ") 
# )

# y_f1 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/yoga/yoga-1.jpg")
# y_wc1.photo.attach(io: y_f1, filename: 'yoga-1.jpg')

# y_wc2 = WorkoutClass.create(
#   name: "30 min Yoga Flow",
#   date: Faker::Time.forward(days: 60, period: :all),
#   skill_level: "Intermediate",
#   category_id: c5.id,
#   instructor_id: u4.id,
#   description: Faker::Lorem.paragraphs.join(" ") 
# )

# y_f2 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/yoga/yoga-2.jpg")
# y_wc2.photo.attach(io: y_f2, filename: 'yoga-2.jpg')

# y_wc3 = WorkoutClass.create(
#   name: "Namaste I am Yoga",
#   date: Faker::Time.forward(days: 60, period: :all),
#   skill_level: "Intermediate",
#   category_id: c5.id,
#   instructor_id: u4.id,
#   description: Faker::Lorem.paragraphs.join(" ") 
# )

# y_f3 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/yoga/yoga-3.jpg")
# y_wc3.photo.attach(io: y_f3, filename: 'yoga-3.jpg')

# y_wc4 = WorkoutClass.create(
#   name: "Yoga is Me",
#   date: Faker::Time.forward(days: 60, period: :all),
#   skill_level: "Intermediate",
#   category_id: c5.id,
#   instructor_id: u5.id,
#   description: Faker::Lorem.paragraphs.join(" ") 
# )

# y_f4 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/yoga/yoga-4.jpg")
# y_wc4.photo.attach(io: y_f4, filename: 'yoga-4.jpg')

# y_wc5 = WorkoutClass.create(
#   name: "Yoga with Yoda",
#   date: Faker::Time.forward(days: 60, period: :all),
#   skill_level: "Intense",
#   category_id: c5.id,
#   instructor_id: u5.id,
#   description: Faker::Lorem.paragraphs.join(" ") 
# )

# y_f5 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/yoga/yoga-5.jpg")
# y_wc5.photo.attach(io: y_f5, filename: 'yoga-5.jpg')

# y_wc6 = WorkoutClass.create(
#   name: "Do you love Yoga this Much?",
#   date: Faker::Time.forward(days: 60, period: :all),
#   skill_level: "Intermediate",
#   category_id: c5.id,
#   instructor_id: u6.id,
#   description: Faker::Lorem.paragraphs.join(" ") 
# )

# y_f6 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/yoga/yoga-6.jpg")
# y_wc6.photo.attach(io: y_f6, filename: 'yoga-6.jpg')

# Song.destroy_all
# Song.connection.execute('ALTER SEQUENCE songs_id_seq RESTART WITH 1')

# s1 = Song.create(
#   name: "Mood",
#   artist: "24kGoldn"
# )
# s2 = Song.create(
#   name: "Dynamite",
#   artist: "BTS"
# )
# s2 = Song.create(
#   name: "Blinding Lights",
#   artist: "The Weeknd"
# )
# s3 = Song.create(
#   name: "ROCKSTAR",
#   artist: "DaBaby"
# )
# s4 = Song.create(
#   name: "Watermelon Sugar",
#   artist: "Harry Styles"
# )
# s5 = Song.create(
#   name: "Go Crazy",
#   artist: "Chris Brown"
# )
# s6 = Song.create(
#   name: "Come and Go",
#   artist: "Juice WRLD"
# )
# s7 = Song.create(
#   name: "We Might Fall",
#   artist: "Ghastly"
# )
# s8 = Song.create(
#   name: "Light",
#   artist: "San Holo"
# )
# s9 = Song.create(
#   name: "Money Longer",
#   artist: "Lil Uzi Vert"
# )
# s10 = Song.create(
#   name: "You Was Right",
#   artist: "Lil Uzi Vert"
# )
# s11 = Song.create(
#   name: "Get Right Witcha",
#   artist: "Migos"
# )
# s12 = Song.create(
#   name: "T-Shirt",
#   artist: "Migos"
# )
# s13 = Song.create(
#   name: "Mood",
#   artist: "24kGoldn"
# )
# s14 = Song.create(
#   name: "Antidote",
#   artist: "Travis Scott"
# )
# s15 = Song.create(
#   name: "outside",
#   artist: "Travis Scott"
# )
# s16 = Song.create(
#   name: "Ivy",
#   artist: "Frank Ocean"
# )
# s17 = Song.create(
#   name: "Biking",
#   artist: "Frank Ocean"
# )
# s18 = Song.create(
#   name: "Bad Religion",
#   artist: "Frank Ocean"
# )
# s19 = Song.create(
#   name: "Crawl Outta Love",
#   artist: "ILLENIUM"
# )
# s20 = Song.create(
#   name: "Sad Machine",
#   artist: "Porter Robinson"
# )
# s21 = Song.create(
#   name: "Soundtrack 2 My Life",
#   artist: "Kid Cudi"
# )
# s22 = Song.create(
#   name: "Mr. Rager",
#   artist: "Kid Cudi"
# )
# s23 = Song.create(
#   name: "Get Lucky",
#   artist: "Daft Punk"
# )
# s24 = Song.create(
#   name: "One More Time",
#   artist: "Daft Punk"
# )
# s25 = Song.create(
#   name: "Wildfire",
#   artist: "Nate Smith"
# )
# s26 = Song.create(
#   name: "HUMBLE.",
#   artist: "Kendrick Lamar"
# )
# s27 = Song.create(
#   name: "Money Trees",
#   artist: "Kendrick Lamar"
# )
# s28 = Song.create(
#   name: "Self Care",
#   artist: "Mac Miller"
# )
# s29 = Song.create(
#   name: "Dang!",
#   artist: "Mac Miller"
# )
# s30 = Song.create(
#   name: "My Girl",
#   artist: "The Temptations"
# )

# WorkoutClassSong.destroy_all
# WorkoutClassSong.connection.execute('ALTER SEQUENCE workout_class_songs_id_seq RESTART WITH 1')

# WorkoutClassSong.create(
#   song_id: s1.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s2.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s3.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s4.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s5.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s6.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s7.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s8.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s9.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s10.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s11.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s12.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s13.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s14.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s15.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s16.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s17.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s18.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s19.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s20.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s1.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s2.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s3.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s4.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s5.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s6.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s7.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s8.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s9.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s10.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s11.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s12.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s13.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s14.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s15.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s16.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s17.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s18.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s19.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s20.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s21.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s22.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s23.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s24.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s25.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s26.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s27.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s28.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s29.id,
#   workout_class_id: (1 + rand(12))
# )
# WorkoutClassSong.create(
#   song_id: s30.id,
#   workout_class_id: (1 + rand(12))
# )

# UserFollow.destroy_all
# UserFollow.connection.execute('ALTER SEQUENCE user_follows_id_seq RESTART WITH 1')

Challenge.destroy_all
Challenge.connection.execute('ALTER SEQUENCE challenges_id_seq RESTART WITH 1')

ch1 = Challenge.create!(
  name: "The Annual",
  description: "Build habits for success",
  start_date: DateTime.new(2020, 10, 21),
  end_date: Faker::Time.forward(days: 365, period: :all)
)

ch_img_1 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/challenges/the-annual.png")
ch1.challenge_icon.attach(io: ch_img_1, filename: 'the-annual.png')

ch2 = Challenge.create!(
  name: "Fall Launch Challenge",
  description: "Take a class everyday for life",
  start_date: DateTime.new(2020, 10, 21),
  end_date: Faker::Time.forward(days: 365, period: :all)
)

ch_img_2 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/challenges/leaf-challenge.png")
ch2.challenge_icon.attach(io: ch_img_2, filename: 'leaf-challenge.png')

ch3 = Challenge.create!(
  name: "Up the Tempo",
  description: "Get your grove on and take 7 themed DJ rides",
  start_date: DateTime.new(2020, 10, 21),
  end_date: Faker::Time.forward(days: 365, period: :all)
)

ch_img_3 = open("https://active-storage-unopeleton-seeds.s3-us-west-1.amazonaws.com/challenges/flash-up-the-tempo.png")
ch3.challenge_icon.attach(io: ch_img_3, filename: 'flash-up-the-tempo.png')
