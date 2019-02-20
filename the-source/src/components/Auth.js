import React, { Component } from "react";
import * as api from "../api/api";
import LoginCard from "./LoginCard";

class Auth extends Component {
  state = {
    users: []
  };

  render() {
    const { users } = this.state;
    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">login</h2>
          <br />
          <div className="section-main">
            {users.map(user => (
              <LoginCard users={user} handleClick={this.handleClick} />
            ))}
          </div>
          <br />
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    api.getUsers().then(({ data }) => this.setState({ users: data.users }));
  };

  handleClick = event => {
    event.preventDefault();
    console.log(event.target.value);
  };
}

export default Auth;
