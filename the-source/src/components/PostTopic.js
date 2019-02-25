import React from "react";
import { navigate } from "@reach/router";
import { Form, FormGroup, Input } from "reactstrap";
import * as api from "../api/api";
import "./style/PostTopic.css";
import posticon from "./icons/post.png";

export default class PostTopic extends React.Component {
  state = {
    slug: "",
    description: ""
  };

  render() {
    const { slug, description } = this.state;

    return (
      <div className="input-wrap">
        <Form onSubmit={this.addNewTopic}>
          <FormGroup>
            <Input
              id="slug"
              value={slug}
              onChange={this.handleChange}
              type="text"
              name="text"
              placeholder="new topic to add..."
              style={{ backgroundColor: "lightgray" }}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="description"
              value={description}
              onChange={this.handleChange}
              type="textarea"
              name="text"
              placeholder="brief description of topic..."
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

  addNewTopic = event => {
    event.preventDefault();
    const { slug, description } = this.state;
    const newTopic = { slug, description };
    api.addTopic(newTopic).then(({ data }) => {
      navigate(`/topics/${slug}/articles`);
    });
  };
}
