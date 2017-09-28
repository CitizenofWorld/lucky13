class User < ActiveRecord::Base
  has_secure_password # it adds 2 methods to user objects
end