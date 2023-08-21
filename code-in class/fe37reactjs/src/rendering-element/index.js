import React, { Component } from "react";

export default class RenderingElement extends Component {
    username = "LE";

    
    render(){
        return (
            <div>
                <h3 className = "title"> *Rendering element</h3>
                <p> Username: {this.username} - Lop: {this.lop}</p>
            </div>
            
        )
    }
}