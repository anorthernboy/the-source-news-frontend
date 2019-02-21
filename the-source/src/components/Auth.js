import React, { Component } from "react";
import { Form, Input } from "reactstrap";
import * as api from "../api/api";
import LoginCard from "./cards/LoginCard";
import PostUser from "./PostUser";
import loginicon from "./icons/login.png";

class Auth extends Component {
  state = {
    users: [],
    username: ""
  };

  render() {
    const { user } = this.props;
    const { users, username } = this.state;

    if (user) return this.props.children;
    else
      return (
        <div className="main-home">
          <div className="main-section-head">
            <h2 className="section-title">login</h2>
            <Form onSubmit={this.handleSubmit} className="section-sort">
              <Input
                id="username"
                value={username}
                onChange={this.handleChange}
                type="text"
                style={{ backgroundColor: "lightgray" }}
              />
              <button>
                <img src={loginicon} alt="login" width="25px" height="25px" />
              </button>
            </Form>
          </div>
          <div className="main-section-head">
            <h2 className="section-title">create user</h2>
          </div>
          <div className="main-section-head">
            <div className="section-main">
              <PostUser />
            </div>
          </div>
          <div className="main-section-head">
            <h2 className="section-title">available users</h2>
          </div>
          <div className="main-section-head">
            <div className="section-main">
              {users.map(user => (
                <LoginCard users={user} key={user.username} />
              ))}
            </div>
          </div>
        </div>
      );
  }

  componentDidMount = () => {
    this.fetchUsers();
  };

  fetchUsers = () => {
    api.getUsers().then(({ data }) => this.setState({ users: data.users }));
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.state;
    const { login } = this.props;
    login(username);
  };
}

export default Auth;
