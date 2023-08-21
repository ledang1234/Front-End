import React from "react";
import "./App.css";
// import Baitap1 from "./baitap1";
// import Baitap2 from "./baitap2";
import RenderingElement from "./rendering-element";
import HandlingEvent from "./handling-event";
import ExampleEvent from "./handling-event/examle-event"
// import State from "./state"
import ExampleCar from "./example-car"
import ListKey from "./list-key"
import ExampleListKey from "./list-key/example-listkey"
import Prop from  "./prop"
import BaiTapProps from "./baiTapProps"
// import ShoppingCart from "./shopping-cart"

function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      <RenderingElement/>
      <hr></hr>
      <HandlingEvent/>
      <hr></hr>
      <ExampleEvent/>
      {/* <hr></hr>
      <State/> */}
      <hr></hr>
      <ExampleCar/>
      <hr></hr>
      <ListKey/>
      <hr></hr>
      <ExampleListKey/>
      <hr></hr>
      <Prop/>>
      <hr></hr>
      <BaiTapProps/>
      {/* <hr></hr>
      <ShoppingCart/> */}
    </div>
  );
}

export default App;
