source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.4'
# Use postgresql as the database for Active Record
gem 'pg'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use Devise for authentication
gem 'devise' , '~> 3.5.0'

# Use Bower via Bower-Rails for front end package management
gem 'bower-rails'

# Use Faker to populate customer database 
gem 'faker', '1.4.3'

# Use angular-rails-templates to enable angular html assets to be served via the
# asset pipeline. Use sprockets 2.x because 3.x breaks the aforementioned gem
gem 'angular-rails-templates'
gem 'sprockets', "~> 2.0"

# In order to run db:seed on Heroku without it timing out, use a background dyno by queing it up with delayed task
gem 'delayed_task'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  # Use RSpec instead of Test::Unit as the syntax is familiar with Jasmine for JS testing
  # and this will mean a shallower learning curve for both
  gem 'rspec-rails'
  # Using poltergeist will bridge the gap between capybara and phantomjs for acceptance
  # testing. Poltergeist gem will install Capybara gem.
  gem 'poltergeist'
  # db cleaner gives us flexibility to use permanent test fixtures for 
  # acceptance-testing or transactional ones on a blank database for rspec.
  gem 'database_cleaner'
  # for javascript testing we're using teaspoon to bridge the gap between Jasmine and our app
  gem 'teaspoon-jasmine'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
end

