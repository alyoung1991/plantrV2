export const fetchPlants = (data) => (
    $.ajax({
        method: 'GET',
        url: '/api/plants',
        data
    })
);

export const createPlant = (plant) => (
    $.ajax({
        method: 'POST',
        url: '/api/plants',
        data: { plant }
    })
);