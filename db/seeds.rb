User.delete_all
Plant.delete_all

ActiveRecord::Base.connection.reset_pk_sequence!("users")
ActiveRecord::Base.connection.reset_pk_sequence!("plants")

User.create!(
    email: 'test@email.com',
    password: 'password',
    name: 'Test User'
)

Plant.create!(
    family: 'Cactus',
    name: 'Pricky Martin',
    age: 1,
    owner_id: 1,
    last_watered: Date.today
)

Plant.create!(
    family: 'Rose',
    name: 'Amber Rose',
    age: 2,
    owner_id: 1,
    last_watered: Date.today - 15
)

Plant.create!(
    family: 'Succulent',
    name: 'Succi Mane',
    age: 3,
    owner_id: 1,
    last_watered: Date.today - 30
)