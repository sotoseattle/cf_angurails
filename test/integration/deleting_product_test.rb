require 'test_helper'

class DeletingProductTest < ActionDispatch::IntegrationTest
  setup do
    @product = Product.create!(
      name: 'Azurite',
      description: 'Some gems have hidden qualities \
      beyond their luster, beyond their shine... Azurite is one of those gems',
      price: 110.50)
  end
  test 'delete a product' do
    delete "/products/#{@product.id}"
    assert_equal 204, response.status
  end
end
