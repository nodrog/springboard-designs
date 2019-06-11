source "https://rubygems.org"
ruby RUBY_VERSION

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve


require 'rbconfig'
if RbConfig::CONFIG['target_os'] =~ /darwin(1[0-3])/i
  gem 'rb-fsevent', '<= 0.9.4'
end

# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
# gem "jekyll", "3.3.0"
gem "jekyll", "3.6.3"
gem 'sprockets', '~>3.7.2'

gem "minima", "~> 2.0"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
gem 'uglifier'
# gem 'sprockets-sass'
# gem 'sprockets-helpers'

# If you have any plugins, put them here!
group :jekyll_plugins do
  # gem "jekyll-github-metadata", "~> 1.0"
  # gem 'jekyll-bootstrap-sass'
  gem "jekyll-assets"
  gem "jekyll-seo-tag"
  gem "jekyll-coffeescript"
end
