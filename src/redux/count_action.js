import {DECREMENT, INCREMENT} from "./constants";

// sync action
export const increment = data => ({type: INCREMENT, data});
export const decrement = data => ({type: DECREMENT, data});

// async action
export const incrementAsync = (data, timeout) => (dispatch) => {
    setTimeout(() => {
        dispatch(increment(data))
    }, timeout)
};
