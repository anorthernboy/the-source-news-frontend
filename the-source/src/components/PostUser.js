import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import * as api from "../api/api";
import posticon from "./icons/post.png";

export default class PostUser extends React.Component {
  state = {
    isLoading: true,
    username: "",
    avatar_url: "",
    name: "",
    addedUser: ""
  };

  render() {
    const { isLoading, username, avatar_url, name, addedUser } = this.state;
    if (isLoading) return <p className="tc helvetica black-70">Loading...</p>;
    if (addedUser.length !== 0)
      return (
        <p className="tc helvetica black-70">{`${
          addedUser.username
        } was successfully added`}</p>
      );
    else
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
              />
            </FormGroup>
            <button className="input-button">
              <img src={posticon} alt="post icon" width="28px" height="28px" />
            </button>
          </Form>
        </div>
      );
  }

  componentDidMount = () => {
    this.setState({ isLoading: false });
  };

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
