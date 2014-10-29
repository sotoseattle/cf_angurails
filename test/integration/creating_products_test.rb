require 'test_helper'

class CreatingProductsTest < ActionDispatch::IntegrationTest
  test 'create a product with valid data' do
    post '/api/products', { product: {
      name: 'Ruby',
      description: 'The most beautiful of them all',
      price: '999.99',
      shine: "99",
      faces: 7,
      rarity: 5,
      color: 'red'
    }}.to_json, {
      'Accept' => 'application/json',
      'Content-Type' => 'application/json'
    }

    assert_equal 201, response.status
    assert_equal Mime::JSON, response.content_type

    product = json(response.body)
    assert_equal api_product_url(product[:id]), response.location

    assert_equal 'Ruby', product[:name]
    assert_equal 999.99, product[:price]
    assert_equal "99", product[:shine]
    assert_equal 7, product[:faces]
    assert_equal 5, product[:rarity]
    assert_equal 'red', product[:color]
    assert_equal 'The most beautiful of them all', product[:description]
  end

  test 'does not create a product with invalid data' do
    post '/api/products', { product: {
      name: nil,
      description: 'The most beautiful of them all',
      price: '999.99',
      shine: "99",
      faces: 7,
      rarity: 5,
      color: 'red'
    }}.to_json, {
      'Accept' => 'application/json',
      'Content-Type' => 'application/json'
    }

    assert_equal 422, response.status
    assert_equal Mime::JSON, response.content_type
  end
end
