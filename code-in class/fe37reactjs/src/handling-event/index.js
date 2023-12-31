import React, { Component } from "react";

export default class HandlingEvent extends Component {
    username = "LE";

    handleClick = () => {
        console.log(123)
    }
    handleClickParams = (name, lop) => {
        console.log(name, lop);
    }

    render(){
        return (
            <div>
                <h3 className = "title"> *HandlingEvent</h3>
                <button className = "btn btn-success" onClick ={this.handleClick}>HandlingEvent</button>
                <button className = "btn btn-info" onClick = {()=> { this.handleClickParams("Le", "fe37")}}>HandlingEvent Params</button>
            </div>    
        )
    }
}