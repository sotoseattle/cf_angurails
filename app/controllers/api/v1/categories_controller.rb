module Api
  module V1
    class CategoriesController < ApplicationController
      def index
        categories = Category.all
        render json: categories, status: 200
      end
    end
  end
end
