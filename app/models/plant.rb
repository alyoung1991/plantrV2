# == Schema Information
#
# Table name: plants
#
#  id           :bigint           not null, primary key
#  type         :string           not null
#  name         :string           not null
#  age          :integer          not null
#  owner_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  last_watered :datetime
#
class Plant < ApplicationRecord
    belongs_to :owner,
        class_name: :User

    def self.search_query_match(query)
        query = query == nil ? "" : query
        self.where("LOWER(name) LIKE ?", "%" + query.downcase + "%")
    end
end
