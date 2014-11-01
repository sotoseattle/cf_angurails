require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Angurails
  class Application < Rails::Application
    config.active_record.raise_in_transactional_callbacks = true
    config.generators do |g|
        g.stylesheet = false
        g.javascript = false
        g.test_framework = false
        g.helper = false
    end

    config.to_prepare do
      DeviseController.respond_to :html, :json
    end
  end
end
