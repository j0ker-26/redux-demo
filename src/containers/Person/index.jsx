import React, {Component} from 'react';
import {connect} from "react-redux";
import {nanoid} from 'nanoid';
import {addPerson} from "../../redux/actions/person";

class Person extends Component {

    handleAddPerson = () => {
        const name = this.nameDom.value,
            age = Number.parseInt(this.ageDom.value, 10);

        if (name !== '' && !Number.isNaN(age)) {
            this.props.addPerson({id: nanoid(), name, age});
        }

        this.nameDom.value = '';
        this.ageDom.value = '';
    }

    render() {
        const {persons, sum} = this.props;
        return (
            <div>
                <h2>This is Person Component.</h2>
                <h3>sum is {sum}</h3>
                <input type="text" placeholder='name'
                       ref={d => this.nameDom = d}/>&nbsp;&nbsp;
                <input type="text" placeholder='age'
                       ref={d => this.ageDom = d}/>&nbsp;&nbsp;
                <button onClick={this.handleAddPerson}>submit</button>
                <ul>
                    {persons.map(p => <li key={p.id}>{p.name}---{p.age}</li>)}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({...state}),
    {addPerson}
)(Person);
