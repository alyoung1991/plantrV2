export const fetchPlants = (data) => (
    $.ajax({
        method: 'GET',
        url: '/api/plants',
        data
    })
);