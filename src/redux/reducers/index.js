import {combineReducers} from "redux";
import sum from "./count";
import persons from './person';

export default combineReducers({
    // key to the return object of store.getState()
    sum, persons
});


