import { combineReducers } from "redux";
import CardReducer from "./CardReducer";
import { createStore } from "redux"; 

const rootReducer = combineReducers({
    CardReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;