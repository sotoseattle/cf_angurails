# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Product.create!(name: 'Azurite', description: 'Some gems have hidden qualities \
  beyond their luster, beyond their shine... Azurite is one of those gems')
Product.create!(name: 'Bloodstone', description: 'Origin of the Bloodstone \
  is unknown, hence its low value. It has a very high shine and 12 sides, however.')
