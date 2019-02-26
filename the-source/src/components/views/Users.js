import React, { Component } from "react";
import * as api from "../../api/api";
import UserCard from "../cards/UserCard";
import Error from "../views/Error";
import Loading from "../cards/Loading";

class Users extends Component {
  state = {
    isLoading: true,
    users: [],
    isError: ""
  };

  render() {
    const { isError, isLoading, users } = this.state;

    if (isError)
      return <Error errorCode={isError.status} errorMsg={isError.msg} />;

    if (isLoading) return <Loading />;

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
