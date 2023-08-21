import React, { Component } from "react";

export default class ExampleEvent extends Component {

    isLogin = false;
    username = "CyberSoft";

    // renderHTML = () => {  
    //        if (this.isLogin){
    //             return <h4> Hello {this.username}</h4>;
    //        }
    //        return <button className = "btn btn-success">Login </button>

    // };

    login = () =>{
        console.log(123);
    }

    renderHTML = () => {
        return this.isLogin ?  (<h4> Hello {this.username}</h4> 
            ): (
            <button className = "btn btn-success" onClick = {this.login}>
                Login 
                </button>
            );
    };
    render() {
        return (
            <div>
                <h3 className="title">*ExampleEvent</h3>
                {this.renderHTML()}
            </div>

        );
    }
}