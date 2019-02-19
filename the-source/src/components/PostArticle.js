import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import * as api from "../api/api";

export default class PostArticle extends React.Component {
  state = {
    isLoading: true,
    title: "",
    body: "",
    username: "",
    addedArticle: ""
  };

  render() {
    const { isLoading, title, body, username, addedArticle } = this.state;
    if (isLoading) return <p className="tc helvetica black-70">Loading...</p>;
    if (addedArticle.length !== 0)
      return (
        <p className="tc helvetica black-70">{`${
          addedArticle.title
        } was successfully added`}</p>
      );
    else
      return (
        <div>
          <h4>POST ARTICLE HERE</h4>
          <Form onSubmit={this.addNewArticle}>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={this.handleChange}
                type="text"
                name="text"
                placeholder="Title of article"
              />
            </FormGroup>
            <FormGroup>
              <Label for="body">body</Label>
              <Input
                id="body"
                value={body}
                onChange={this.handleChange}
                type="textarea"
                name="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={this.handleChange}
                type="text"
                name="text"
                placeholder="Username"
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

  addNewArticle = event => {
    event.preventDefault();
    const { title, body, username } = this.state;
    const { topic } = this.props;
    const newArticle = { title, body, username };
    api.addArticle(topic, newArticle).then(({ data }) =>
      this.setState({
        addedArticle: data
      })
    );
  };
}
