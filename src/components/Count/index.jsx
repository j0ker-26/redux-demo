import React, {Component} from 'react';
import store from "../../redux/store";

class Count extends Component {
    increment = () => {
        const {value} = this.selectDom;
        store.dispatch({
            type: 'increment',
            data: parseInt(value, 10)
        });
    }
    decrement = () => {
        const {value} = this.selectDom;
        store.dispatch({
            type: 'decrement',
            data: parseInt(value, 10)
        });
    }
    incrementIfOdd = () => {
        const {value} = this.selectDom,
            sum = store.getState();

        if (sum % 2 === 1) {
            store.dispatch({
                type: 'increment',
                data: parseInt(value, 10)
            });
        }
    }
    incrementAsync = () => {
        const {value} = this.selectDom;

        setTimeout(() => {
            store.dispatch({
                type: 'increment',
                data: parseInt(value, 10)
            });
        }, 1e3)
    }

    render() {
        return (
            <div>
                <h2>{store.getState()}</h2>
                <select ref={dom => this.selectDom = dom}>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}> + </button>&nbsp;&nbsp;
                <button onClick={this.decrement}> - </button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}> + if odd </button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}> + async </button>
            </div>
        );
    }
}

export default Count;
