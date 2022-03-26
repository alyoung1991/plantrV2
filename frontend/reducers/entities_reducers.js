import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import plantsReducer from "./plants_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    plants: plantsReducer
});

export default entitiesReducer;