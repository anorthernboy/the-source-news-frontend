import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
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
        <div>
          <Form onSubmit={this.addNewUser}>
            <FormGroup>
              <Label for="username">Username</Label>
              <div className="input-wrap">
                <Input
                  id="username"
                  value={username}
                  onChange={this.handleChange}
                  type="text"
                  name="text"
                  style={{
                    backgroundColor: "lightgray"
                  }}
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="avatar_url">Profile Picture URL</Label>
              <div className="input-wrap">
                <Input
                  id="avatar_url"
                  value={avatar_url}
                  onChange={this.handleChange}
                  type="text"
                  name="text"
                  style={{
                    backgroundColor: "lightgray"
                  }}
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="name">Full Name</Label>
              <div className="input-wrap">
                <Input
                  id="name"
                  value={name}
                  onChange={this.handleChange}
                  type="text"
                  name="text"
                  style={{
                    backgroundColor: "lightgray"
                  }}
                />
              </div>
            </FormGroup>
            <button>
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
