import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ]
    };
  }
  /**
   * Tim vi tri
   */
  timViTri  =  id  =>{
    return this.state.userList.findIndex(user=>{
      return user.id === id
    })
  }
  /**
   * DELETE
   */
  handleDelete = user =>{
    let userList=[...this.state.userList]
    let index = this.timViTri(user.id)

    if (index !== -1  ){
      userList.splice(index,1);
      this.setState({
        userList
      })
    }
   
  }
  /**
   * SUMMIT (Add/ Update)
   */

  handleSubmit  = user  => {
    let userAdd = {...user } ;
    // =>tham chieu  
    user.id =  Math.random();
    let userList  =   [...this.state.userList, userAdd];
    this.setState({
      userList
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users userList={this.state.userList} delete ={this.handleDelete}/>
        <Modal submit={this.handleSubmit} />
      </div>
    );
  }
}

export default Home;
