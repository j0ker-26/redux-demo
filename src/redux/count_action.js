import {DECREMENT, INCREMENT} from "./constants";

export const increment = data => ({type: INCREMENT, data});
export const decrement = data => ({type: DECREMENT, data});
