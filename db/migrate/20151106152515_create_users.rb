class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :name
      t.string :password_digest
      t.string :type
      t.string :address
      t.integer :age

      t.timestamps null: false
    end
  end
end
