import React, { Component } from "react";
import { connect  } from "react-redux";

class UserItem extends Component {
  render() {
    let { user } = this.props;

    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUserRedux"
            onClick={() => {
              this.props.getUserEdit(user)
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              // this.props.delete(user);
              this.props.delete(user);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDisaptchToProps = dispatch => {
  return {
    //key:  value
    delete: (user) => {
      let action ={
        type: "DELETE",
        user,
      };
      dispatch(action);
    }
  }
}

export default connect(null, mapDisaptchToProps) (UserItem);
