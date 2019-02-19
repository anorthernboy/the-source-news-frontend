import React, { Component } from "react";
import * as api from "../api/api";
import PostUser from "../components/PostUser";

class Users extends Component {
  state = {
    users: []
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>THIS IS Users</h1>
        {users.map(user => (
          <div key={user.username}>
            <h4>{user.username}</h4>
            <h6>{user.name}</h6>
          </div>
        ))}
        <br />
        <PostUser />
      </div>
    );
  }

  componentDidMount = () => {
    api.getUsers().then(({ data }) => this.setState({ users: data.users }));
  };
}

export default Users;
