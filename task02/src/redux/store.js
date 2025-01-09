import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";
import studentReducer from "./studentReducers";

const rootReducer = combineReducers({
    form: formReducer,
    students: studentReducer,
});

const store = createStore(rootReducer);
export default store;
