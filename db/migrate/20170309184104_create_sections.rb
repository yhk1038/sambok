class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :name
      t.string :subtitle
      t.integer :subtitle_size
      t.string :subtitle2
      t.integer :subtitle2_size
      t.text :content
      t.string :img_path
      t.string :bg_img_path

      t.timestamps null: false
    end
  end
end
