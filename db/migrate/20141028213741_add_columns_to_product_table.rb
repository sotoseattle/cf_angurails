class AddColumnsToProductTable < ActiveRecord::Migration
  def change
    add_column :products, :price, :float
    add_column :products, :shine, :string
    add_column :products, :faces, :integer
    add_column :products, :rarity, :integer
    add_column :products, :color, :string
  end
end
