import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducers";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer
});

export default rootReducer;