import {ADD_PERSON} from "../constants";

const INIT_STATE = [];

export default function personReducer(preState = INIT_STATE, action) {
    const {type, data} = action;

    switch (type) {
        case ADD_PERSON:
            return [data, ...preState];
        default:
            return preState;
    }
};
