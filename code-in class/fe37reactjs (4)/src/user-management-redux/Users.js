import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux"

class Users extends Component {
  renderTable = () => {
    return this.props.userList.map(user => {
      return (
        <UserItem
          key={user.id}
          user={user}
          // delete={this.props.delete}
          getUserEdit={this.props.getUserEdit}
        />
      )

    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    //key: value
    userList: state.userReducer.userList
  }
}

export default connect(mapStateToProps, null)(Users);
