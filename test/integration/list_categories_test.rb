require 'test_helper'

class ListCategoriesTest < ActionDispatch::IntegrationTest
  setup do
    Category.create!(name: 'gems')
    Category.create!(name: 'stones')
  end

  test 'it lists the existing categories' do
    get '/api/v1/categories'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type

    assert_equal Category.count, json(response.body).count
  end
end
