class RenameImageUrlColumnToMessages < ActiveRecord::Migration[5.2]
  def change
    rename_column :messages, :image_url, :image
  end
end
