class CreateSamboks < ActiveRecord::Migration
  def change
    create_table :samboks do |t|
      t.string :name
      t.string :slogan
      t.string :img_path

      t.timestamps null: false
    end
  end
end
