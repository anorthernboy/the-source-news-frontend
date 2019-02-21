import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import * as api from "../api/api";
import posticon from "./icons/post.png";

export default class PostTopic extends React.Component {
  state = {
    isLoading: true,
    slug: "",
    description: "",
    addedTopic: ""
  };

  render() {
    const { isLoading, slug, description, addedTopic } = this.state;
    if (isLoading) return <p className="tc helvetica black-70">Loading...</p>;
    if (addedTopic.length !== 0)
      return (
        <p className="tc helvetica black-70">{`${
          addedTopic.slug
        } was successfully added`}</p>
      );
    else
      return (
        <div>
          <Form onSubmit={this.addNewTopic}>
            <FormGroup>
              <div className="input-wrap">
                <Input
                  id="slug"
                  value={slug}
                  onChange={this.handleChange}
                  type="text"
                  name="text"
                  placeholder="new topic to add..."
                  style={{ backgroundColor: "lightgray" }}
                />
              </div>
            </FormGroup>
            <FormGroup>
              <div className="input-wrap">
                <Input
                  id="description"
                  value={description}
                  onChange={this.handleChange}
                  type="textarea"
                  name="text"
                  placeholder="brief description of topic..."
                  style={{ backgroundColor: "lightgray" }}
                />
              </div>
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

  addNewTopic = event => {
    event.preventDefault();
    const { slug, description } = this.state;
    const newTopic = { slug, description };
    api.addTopic(newTopic).then(({ data }) =>
      this.setState({
        addedTopic: data
      })
    );
  };
}
