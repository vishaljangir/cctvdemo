class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :name
      t.integer :contact
      t.string :email
      t.string :address

      t.timestamps
    end
  end
end