import { RECEIVE_PLANTS } from '../actions/plant_actions';

const plantsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_PLANTS:
            return action.plants;
        default:
            return state;
    }
};

export default plantsReducer;