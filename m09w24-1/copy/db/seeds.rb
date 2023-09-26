# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "starting the seeds"

puts "creating the locations"

20.times do
  Location.create(
    name: Faker::JapaneseMedia::OnePiece.location
  )
end

puts "querying the locations"

locations = Location.all

puts "creating the characters"

50.times do
  Character.create(
    name: Faker::JapaneseMedia::OnePiece.character,
    quote: Faker::JapaneseMedia::OnePiece.quote,
    location: locations.sample
  )
end

puts "all done!"
