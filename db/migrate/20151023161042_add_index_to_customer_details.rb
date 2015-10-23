class AddIndexToCustomerDetails < ActiveRecord::Migration
  def up
    execute %{
      CREATE UNIQUE INDEX
      customer_details_customer_id
      ON
      customer_details(customer_id)
    }
  end
  def down
    execute %{
      DROP INDEX customer_details_id
    }
  end
end
