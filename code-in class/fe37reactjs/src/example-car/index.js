import React, { Component } from "react";
export default class ExampleCar extends Component {
  
    constructor(props) {
        super (props);
        this.state = {
            img: "./img/imgRedCar.jpg"
        }
    }

    changeColor = (color) => {
        let img = "";
        switch(color) {
            case "Red":
                img = "./img/imgRedCar.jpg"
                break;
            case "Silver":
                img = "./img/imgSilverCar.jpg"
                break;
            default:
                img = "./img/imgBlackCar.jpg"
                break;
        }
        this.setState({
            img
        },()=>console.log(img))
    }

    
    render(){
        return (
            <div>
                <h3 className = "title"> *ExampleCar</h3>
               <div className = "container">
                   <div className = "row">
                       <div className = "col-sm-5">
                            <img className="img-fluid" src = {this.state.img} alt = ""></img>
                        </div>
                       <div className = "col-sm-7">
                           <button className = "btn btn-danger mx-2" onClick = {()=>this.changeColor("Red")}  > Red</button>
                           <button className = "btn btn-light mx-2" onClick = {()=>this.changeColor("Silver")}> Silver</button>
                           <button className = "btn btn-dark mx-2" onClick = {()=>this.changeColor("Black")}> Black</button>

                       </div>

                   </div>
               </div>
            </div>
            
        )
    }
}