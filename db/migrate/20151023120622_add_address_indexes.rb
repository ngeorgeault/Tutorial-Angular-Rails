class AddAddressIndexes < ActiveRecord::Migration
  def change

    add_index :customers_shipping_addresses, :customer_id
    add_index :customers_billing_addresses, :customer_id
    add_index :addresses, :state_id
  end
end
