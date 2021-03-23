import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment, decrement, incrementAsync} from "../../redux/actions/count";

class Count extends Component {
    increment = () => {
        const {value} = this.selectDom;
        this.props.increment(Number.parseInt(value, 10));
    }
    decrement = () => {
        const {value} = this.selectDom;
        this.props.decrement(Number.parseInt(value, 10));
    }
    incrementIfOdd = () => {
        const {value} = this.selectDom;
        if (this.props.sum % 2 === 1) {
            this.props.increment(Number.parseInt(value, 10));
        }
    }
    incrementAsync = () => {
        const {value} = this.selectDom;
        this.props.incrementAsync(Number.parseInt(value, 10), 5e2);
    }

    render() {
        const {sum, persons} = this.props;
        return (
            <div>
                <h2>This is Count Component.</h2>
                <h2>sum is {sum}, person list is {persons.length}</h2>
                <select ref={dom => this.selectDom = dom}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>+ if odd</button>
                &nbsp;&nbsp;
                <button onClick={this.incrementAsync}>+ async</button>
            </div>
        );
    }
}

export default connect(
    // state
    (state) => ({...state}),
    // methods
    {increment, decrement, incrementAsync}
)(Count);

