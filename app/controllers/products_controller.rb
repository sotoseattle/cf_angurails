class ProductsController < ApplicationController
  def index
    products = Product.all

    if above_price = params[:price]
      products = products.where('price >= ?', above_price)
    end
    render json: products, status: 200
  end
end
