import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import * as api from "../api/api";
import "./style/PostUser.css";
import posticon from "./icons/post.png";

export default class PostUser extends React.Component {
  state = {
    username: "",
    avatar_url: "",
    name: "",
    addedUser: ""
  };

  render() {
    const { username, avatar_url, name, addedUser } = this.state;

    if (addedUser.username)
      return (
        <div className="main-alert-home">
          <div className="main-alert-head">
            <h4 className="section-alert-top">{`hello ${
              addedUser.username
            }`}</h4>
            <h4 className="section-alert-bottom">{`you can now sign in to the source`}</h4>
          </div>
        </div>
      );

    return (
      <div className="input-wrap">
        <Form onSubmit={this.addNewUser}>
          <FormGroup>
            <Input
              id="username"
              value={username}
              onChange={this.handleChange}
              type="text"
              name="text"
              placeholder="choose a username..."
              style={{
                backgroundColor: "lightgray"
              }}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="avatar_url"
              value={avatar_url}
              onChange={this.handleChange}
              type="text"
              name="text"
              placeholder="add a URL path to profile picture..."
              style={{
                backgroundColor: "lightgray"
              }}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="name"
              value={name}
              onChange={this.handleChange}
              type="text"
              name="text"
              placeholder="enter full name..."
              style={{
                backgroundColor: "lightgray"
              }}
              required
            />
          </FormGroup>
          <button className="input-button">
            <img src={posticon} alt="post icon" width="28px" height="28px" />
          </button>
        </Form>
      </div>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  addNewUser = event => {
    event.preventDefault();
    const { username, avatar_url, name } = this.state;
    const newUser = { username, avatar_url, name };
    api.addUser(newUser).then(({ data }) =>
      this.setState({
        addedUser: data
      })
    );
  };
}
