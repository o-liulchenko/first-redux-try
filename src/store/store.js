import { combineReducers, createStore } from "redux";
import { sidebarReducer } from "./sidebarReducer";
import { authenticationReducer } from "./authenticationReducer";
import { inpatientReducer } from "./inpatientReducer";


let reducers = combineReducers({
    sidebar: sidebarReducer,
    inpatient: inpatientReducer,
    authentication: authenticationReducer
});

export let store = createStore(reducers);