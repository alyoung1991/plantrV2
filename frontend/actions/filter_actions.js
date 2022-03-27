import { fetchPlants } from "./plant_actions";

export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';

const updateSearchQuery = (query) => ({
    type: UPDATE_SEARCH_QUERY,
    query
});

export const updateFilter = (query) => (dispatch, getState) => {
    dispatch(updateSearchQuery(query));
    return fetchPlants(getState().ui.filters)(dispatch);
};