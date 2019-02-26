import React, { Component } from "react";
import * as api from "../../api/api";
import UserCard from "../cards/UserCard";
import Error from "../views/Error";
import Loading from "../buttons/Loading";

class Users extends Component {
  state = {
    isLoading: true,
    users: [],
    isError: ""
  };

  render() {
    const { isError, isLoading, users } = this.state;

    if (isError)
      return (
        <div className="main-section-head">
          <div className="section-main">
            <div className="main-alert-home">
              <div className="main-alert-head">
                <h2 className="section-loading">
                  <Error errorCode={isError.status} errorMsg={isError.msg} />
                </h2>
              </div>
            </div>
          </div>
        </div>
      );

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
    this.fetchUsers();
    this.setState({ isLoading: false });
  };

  fetchUsers = () => {
    api
      .getUsers()
      .then(({ data }) =>
        this.setState({ users: data.users, isLoading: false })
      );
  };
}

export default Users;
