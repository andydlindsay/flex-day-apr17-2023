# hash == collection of key/value pairs, objects, dictionaries, associative arrays

user = {
  "username" => "jstamos",
  "password" => "1234"
}

# puts user
# puts user["username"]

# symbols => lightweight strings (as close to a primitive as you can get in Ruby)

user = {
  :username => 'jstamos',
  :password => '1234'
}

# falsey => nil, false
# puts user
# p user[:username]

user = {
  username: 'jstamos',
  password: '1234'
}

puts user
