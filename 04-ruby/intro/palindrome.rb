
# input = 'racecar!'

# input = input.gsub(/!/, '')

# if input == input.reverse
#   puts 'yes'
# else
#   puts 'no'
# end

def palindrome(str)
  stripped = str.gsub(/[^\w]/,'').downcase 
  if stripped == stripped.reverse()
    return true
  else
    return false
  end
end

puts palindrome('racecar')
