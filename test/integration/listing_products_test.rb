require 'test_helper'

class ListingProductsTest < ActionDispatch::IntegrationTest
  setup do
    Product.create!(
      name: 'Azurite',
      description: 'Some gems have hidden qualities \
      beyond their luster, beyond their shine... Azurite is one of those gems',
      price: 110.50)
    Product.create!(
      name: 'Bloodstone',
      description: 'Origin of the Bloodstone \
      is unknown, hence its low value. It has a very high shine and 12 sides, however.',
      price: 22.90)
  end

  test 'listing products' do
    get '/products'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type

    assert_equal Product.count, JSON.parse(response.body).size
  end

  test 'most expensive gems' do
    get '/products?price=100.00'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    assert_equal 1, JSON.parse(response.body).size
  end
end
