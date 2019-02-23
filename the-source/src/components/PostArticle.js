import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import * as api from "../api/api";
import posticon from "./icons/post.png";

export default class PostArticle extends React.Component {
  state = {
    title: "",
    body: ""
  };

  render() {
    const { title, body } = this.state;

    return (
      <div className="input-wrap">
        <Form onSubmit={this.addNewArticle}>
          <FormGroup>
            <Input
              id="title"
              value={title}
              onChange={this.handleChange}
              type="text"
              name="text"
              placeholder="title of new article..."
              style={{
                backgroundColor: "lightgray"
              }}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="body"
              value={body}
              onChange={this.handleChange}
              type="textarea"
              name="text"
              placeholder="body of new article..."
              style={{ backgroundColor: "lightgray" }}
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

  addNewArticle = event => {
    event.preventDefault();
    const { title, body } = this.state;
    const { topic, user, addToArticles } = this.props;
    const newArticle = { title, body, username: user };
    api.addArticle(topic, newArticle).then(({ data }) => {
      addToArticles(data);
    });
  };
}
