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
end
