# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

#Jbuilder snake_cased to camelCase
Jbuilder.key_format camelize: :lower
