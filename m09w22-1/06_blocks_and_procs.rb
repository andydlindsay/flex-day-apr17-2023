# block is denoted with a do..end

animals = ['cat', 'dog', 'horse']

# animals.each do |animal|
#   puts "the animal is #{animal}"
# end

# Proc(edure) is a block stored in memory

# my_block = Proc.new do |animal|
#   puts "the animal is #{animal}"
# end

# animals.each &my_block

# puts

# ['alice', 'bob', 'carol'].each &my_block

my_block = Proc.new do |animal|
  puts "the animal is #{animal}"
end

# functions accept invisible blocks
def accepting_block
  yield('rat') # callback('hello')
  yield('pony') # callback('hello')
  yield('giraffe') # callback('hello')
end

accepting_block &my_block
