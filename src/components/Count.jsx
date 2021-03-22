import React, {Component} from 'react';

class Count extends Component {
    state = {
        sum: 0
    }

    increment = () => {
        const {value} = this.selectDom,
            {sum} = this.state;

        this.setState({
            sum: sum + parseInt(value, 10)
        });
    }
    decrement = () => {
        const {value} = this.selectDom,
            {sum} = this.state;

        this.setState({
            sum: sum - parseInt(value, 10)
        });
    }
    incrementIfOdd = () => {
        const {value} = this.selectDom,
            {sum} = this.state;

        if (sum % 2 === 1) {
            this.setState({
                sum: sum + parseInt(value, 10)
            });
        }
    }
    incrementAsync = () => {
        const {value} = this.selectDom,
            {sum} = this.state;

        setTimeout(() => {
            this.setState({
                sum: sum + parseInt(value, 10)
            });
        }, 1e3)
    }

    render() {
        return (
            <div>
                <h2>{this.state.sum}</h2>
                <select ref={dom => this.selectDom = dom}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>+ if odd</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>+ async</button>
            </div>
        );
    }
}

export default Count;
