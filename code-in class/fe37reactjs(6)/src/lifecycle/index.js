import React, { Component } from "react";

export default class Lifecycle extends Component {
    constructor(props){
        super(props);
        console.log("lifecycle")
        this.state = {
            username: "Gia Le"
        }
    }
    UNSAFE_componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    render(){
        console.log("render")
        return (
            <div>
                <h3 className="title"> Lifecycle</h3>
                <h4>Username: {this.state.username}</h4>
            </div>
        )
    }
}