import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import * as api from "../api/api";
import posticon from "./icons/post.png";

export default class PostArticle extends React.Component {
  state = {
    isLoading: true,
    title: "",
    body: "",
    user: "",
    addedArticle: ""
  };

  render() {
    const { isLoading, title, body, addedArticle } = this.state;
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
          <Form onSubmit={this.addNewArticle}>
            <FormGroup>
              <Label for="title">Title</Label>
              <div className="input-wrap">
                <Input
                  id="title"
                  value={title}
                  onChange={this.handleChange}
                  type="text"
                  name="text"
                  placeholder="Title of article"
                  style={{
                    backgroundColor: "lightgray"
                  }}
                />
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="body">body</Label>
              <div className="input-wrap">
                <Input
                  id="body"
                  value={body}
                  onChange={this.handleChange}
                  type="textarea"
                  name="text"
                  style={{ backgroundColor: "lightgray" }}
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

  addNewArticle = event => {
    event.preventDefault();
    const { title, body } = this.state;
    const { topic, user } = this.props;
    const newArticle = { title, body, username: user };
    api.addArticle(topic, newArticle).then(({ data }) =>
      this.setState({
        addedArticle: data
      })
    );
  };
}
