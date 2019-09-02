json.(@message, :text, :image_url)
json.created_at @message.created_at
json.user_name @message.user.name
#idもデータとして渡す
json.id @message.id