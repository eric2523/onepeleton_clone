class CreateUserChallenges < ActiveRecord::Migration[5.2]
  def change
    create_table :user_challenges do |t|
      t.integer :user_id, null: false 
      t.integer :challenge_id, null: false 
      t.timestamps
    end

    add_index :user_challenges, [:user_id, :challenge_id], unique: true 
  end
end
