import React, { Component } from "react";

export default class ClassProps extends Component {
  // handleResetName = ()=> {
  //   // let name =  "Gia Le"
  //   this.props.resetName("Gia Le");
  // }

  hand
  
  render() {
    let component = {
      border: "1px solid black",
      padding: "30px"
    };
    return (
      <div style={component}>
        <h3>Details here Class Component</h3>
        <p>{this.props.name}</p>
        <button className="btn btn-success" onClick={() => {this.props.resetName("Gia Le")}}>reset name</button>
      </div>
    );
  }
}
