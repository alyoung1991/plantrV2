import * as APIUtil from '../util/plant_api_util';

export const RECEIVE_PLANTS = 'RECEIVE_PLANTS';
export const RECEIVE_PLANT = 'RECEIVE_PLANT';

export const receievePlants = plants => ({
    type: RECEIVE_PLANTS,
    plants
});

export const receievePlant = plant => ({
    type: RECEIVE_PLANT,
    plant
});

export const fetchPlants = (query) => dispatch => (
    APIUtil.fetchPlants(query)
        .then(plants => dispatch(receievePlants(plants)))
);

export const createPlant = (plant) => dispatch => (
    APIUtil.createPlant(plant)
        .then(plant => dispatch(receievePlant(plant)))
);