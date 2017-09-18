
# hackers
#   |
#   |-- ryan_s
#         |--README.md

#   |-- jon
#         |--README.md

require 'pry'
require 'fileutils'

class_name = 'lucky13'

hackers = ['Ariel', 'Darryl', 'Fiona', 'Hsing', 'Jessica', 'Jon', 'Lyle', 'Pauline', 'Ryan M', 'Ryan  S', 'Sidhra', 'Trystan', 'Wendy']

binding.pry

puts 'end of program'

# blocks

# loop do
#   puts 'forever young'
#   puts 'sdfsdfsdf'
#   puts 'wrwerw'
# end

# loop { puts 'forever young' }

# while sometime == true
# end

# for name in hackers do
#   puts name
# end

hackers.each do |hacker|

  folder_name = hacker.downcase().gsub(/\s+/, '_')

  FileUtils.mkdir(folder_name)

  FileUtils.cd(folder_name) do
    FileUtils.touch('README.md')
  end
end








