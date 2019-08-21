class RenameImageColumnToMessages < ActiveRecord::Migration[5.2]
  def change
    rename_column :messages, :image, :image_url
  end
end
