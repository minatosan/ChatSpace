class RenameImageUrl2ColumnToMessages < ActiveRecord::Migration[5.2]
  def change
    rename_column :messages, :image_url, :image
  end
end
