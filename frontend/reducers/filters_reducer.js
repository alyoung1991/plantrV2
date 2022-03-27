import { UPDATE_SEARCH_QUERY } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
    query: ''
});

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);

    switch(action.type){
        case UPDATE_SEARCH_QUERY:
            const newQuery = {
                query: action.query
            }
            return Object.assign({}, state, newQuery);
        default:
            return state;
    }
}

export default filtersReducer;