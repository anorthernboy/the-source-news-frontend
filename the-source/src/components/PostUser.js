import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as api from "../api/api";

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
          <h4>POST USER HERE</h4>
          <Form onSubmit={this.addNewUser}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={this.handleChange}
                type="text"
                name="text"
                placeholder="username of User"
              />
            </FormGroup>
            <FormGroup>
              <Label for="avatar_url">Profile Picture</Label>
              <Input
                id="avatar_url"
                value={avatar_url}
                onChange={this.handleChange}
                type="text"
                name="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={this.handleChange}
                type="text"
                name="text"
                placeholder="Name"
              />
            </FormGroup>
            <Button>Submit</Button>
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
