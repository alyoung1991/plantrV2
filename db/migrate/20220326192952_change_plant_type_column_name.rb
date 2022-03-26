class ChangePlantTypeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :plants, :type, :family
  end
end
