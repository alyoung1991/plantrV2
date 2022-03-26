export const fetchPlants = () => (
    $.ajax({
        method: 'GET',
        url: '/api/plants',
        error: (err) => console.log(err)
    })
);