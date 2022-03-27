import { RECEIVE_PLANTS, RECEIVE_PLANT } from '../actions/plant_actions';

const plantsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_PLANTS:
            return action.plants;
        case RECEIVE_PLANT:
            return action.plant;
        default:
            return state;
    }
};

export default plantsReducer;