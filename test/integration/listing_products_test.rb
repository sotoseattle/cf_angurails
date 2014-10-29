require 'test_helper'

class ListingProductsTest < ActionDispatch::IntegrationTest
  setup do
    @category = Category.create!(name: 'gems')
    @category.products.create!(
      name: 'Azurite', price: 110.50, category_id: @category_id,
      description: 'Some gems have hidden qualities \
      beyond their luster, beyond their shine... Azurite is one of those gems')
    @category.products.create!(
      name: 'Bloodstone', price: 22.90, category_id: @category_id,
      description: 'Origin of the Bloodstone \
      is unknown, hence its low value. It has a very high shine and 12 sides, however.')
  end

  test 'listing products' do
    get '/products'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type

    products = json(response.body)
    assert_equal Product.count, products.size

    product = Product.find(products.first[:id])
    assert_equal @category.id, product.category_id
  end

  test 'most expensive gems' do
    get '/products?price=100.00'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    assert_equal 1, json(response.body).size
  end
end
