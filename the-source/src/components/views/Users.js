import React, { Component } from "react";
import * as api from "../../api/api";
import UserCard from "../cards/UserCard";
import loadingicon from "../icons/loading.png";

class Users extends Component {
  state = {
    isLoading: true,
    users: []
  };

  render() {
    const { isLoading, users } = this.state;

    if (isLoading)
      return (
        <div className="main-alert-home">
          <div className="main-alert-head">
            <h2 className="section-loading">
              <img
                src={loadingicon}
                alt="loading icon"
                width="40px"
                height="40px"
              />
            </h2>
          </div>
        </div>
      );

    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">users</h2>
        </div>
        <div className="main-section-head">
          <div className="section-main">
            {users.map(user => (
              <div key={user.username}>
                <UserCard users={user} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    api
      .getUsers()
      .then(({ data }) =>
        this.setState({ users: data.users, isLoading: false })
      );
  };
}

export default Users;
