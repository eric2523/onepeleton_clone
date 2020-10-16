class AddIndexToSongsNameandArtist < ActiveRecord::Migration[5.2]
  def change
    add_index :songs, :name 
    add_index :songs, :artist 
  end
end
