import {INCREMENT, DECREMENT} from './constants'

const INIT_STATE = 0;
export default function countReducer(preState = INIT_STATE, action) {
    const {type, data} = action;
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}
