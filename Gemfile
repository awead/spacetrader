source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"

gem "bootsnap", require: false
gem "faraday"
gem "importmap-rails"
gem "jbuilder"
gem "pg"
gem "puma", "~> 5.0"
gem "rails", "~> 7.0.5"
gem "sprockets-rails"
gem "stimulus-rails"
gem "turbo-rails"

gem "spacetradersrb", path: "vendor/spacetradersrb"

group :development, :test do
  gem "debug", platforms: %i[mri mingw x64_mingw]
end

group :development do
  gem "standardrb"
  gem "web-console"
end

group :test do
  gem "capybara"
  gem "rspec-its"
  gem "rspec-rails"
  gem "selenium-webdriver"
  gem "webdrivers"
end
