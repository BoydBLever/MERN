import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            hairColor: this.props.hairColor,
            age: this.props.age
        }
    }

    BDay = () => {
        this.setState({
            age: this.state.age + 1
        })
    }
    
    render() {
        console.log(this.props.age)
        return (
            <>
                <hr/>
                {this.props.firstName} {this.props.lastName} <br/>
                Hair Color: {this.props.hairColor} <br/>
                Age: {this.state.age} <br/>
                
                <button onClick={() => {this.BDay()}}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </>
        )
    }
}

export default ClassComponent;