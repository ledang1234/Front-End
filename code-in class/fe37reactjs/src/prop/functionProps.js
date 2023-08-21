import React from "react";

export default function FunctionProps(props) {
  let component = {
    border: "1px solid black",
    padding: "30px"
  };
  let handleResetName = () => {
    props.resetName("Minh Tri");
  }

  return (
    <div style={component}>
      <h3>Details here Function Component</h3>
      <p>{props.name}</p>
      <button className="btn btn-success" onClick={handleResetName}>reset name</button>
    </div>
  );
}
