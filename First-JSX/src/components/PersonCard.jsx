import React from 'react'

const hi = () => {
    console.log("Hello from function hi");
    this.setState({
        age: this.props.age + 1
    })
}

const PersonCard = (props) => {    
    return (
        <fieldset>
            <legend>PersonCard</legend>
            <h1>{props.lastName}, {props.firstName} </h1>
            <h5>Age: {props.age}</h5>
            <h5>Hair Color: {props.hairColor}</h5>
            <button onClick={() => {hi()}}>Birthday Button</button>
        </fieldset>
    )
}

export default PersonCard