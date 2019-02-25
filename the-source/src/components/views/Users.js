import React, { Component } from "react";
import * as api from "../../api/api";
import UserCard from "../cards/UserCard";
import Loading from "../buttons/Loading";

class Users extends Component {
  state = {
    isLoading: true,
    users: []
  };

  render() {
    const { isLoading, users } = this.state;

    if (isLoading)
      return (
        <div className="main-section-head">
          <div className="section-main">
            <div className="main-alert-home">
              <div className="main-alert-head">
                <h2 className="section-loading">
                  <Loading />
                </h2>
              </div>
            </div>
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
