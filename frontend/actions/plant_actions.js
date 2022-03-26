import * as APIUtil from '../util/plant_api_util';

export const RECEIVE_PLANTS = 'RECEIVE_PLANTS';

export const receievePlants = plants => ({
    type: RECEIVE_PLANTS,
    plants
});

export const fetchPlants = () => dispatch => (
    APIUtil.fetchPlants()
        .then(plants => dispatch(receievePlants(plants)))
);