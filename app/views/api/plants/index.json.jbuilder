@plants.each do |plant|
    json.set! plant.id do
        json.partial! 'plant', plant: plant
    end
end