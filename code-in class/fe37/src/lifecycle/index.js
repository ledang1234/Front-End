import React, { Component } from "react";
import Child from "./child"
import Pure from "./pure"
export default class Lifecycle extends Component {
    constructor(props){
        super(props);
        console.log("constructor")
        this.state = {
            username: "Gia Le"
        }
    }
    UNSAFE_componentWillMount(){
        console.log("componentWillMount");
    }
    componentDidMount(){
        //Quan trong
        console.log("componentDidMount")
    }
    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate",nextProps, nextState)
        if (nextState.username === "Minh Tri"){
            return false;
        }
        return true;
    }
    UNSAFE_componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }
    render(){
        console.log("render")
        return (
            <div>
                
                <h3 className="title"> Lifecycle</h3>
                <h4>Username: {this.state.username}</h4>
                <Child username={this.state.username}/>
                <Pure/>
                <button className="btn btn-success" onClick={()=> {
                    this.setState({username: "Minh Tri"})
                }}>Click</button>
            </div>
        )
    }
}
