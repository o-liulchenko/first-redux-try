import { combineReducers, createStore } from "redux";
import { sidebarReducer } from "./sidebarReducer";


let reducers = combineReducers({
    sidebar: sidebarReducer
});

export let store = createStore(reducers);