import React, { Component } from "react";


class UserItem extends Component {
  render() {
    let user = this.props;
    return (
      <tr>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.username}</td>
        <td>{this.props.user.email}</td>
        <td>{this.props.user.phoneNumber}</td>
        <td>{this.props.user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={()=>{this.props.delete(user)}}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
