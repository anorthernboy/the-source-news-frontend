import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import * as api from "../api/api";
import posticon from "./icons/post.png";

export default class PostComment extends React.Component {
  state = {
    body: ""
  };

  render() {
    const { body } = this.state;

    return (
      <div className="input-wrap">
        <Form onSubmit={this.addNewComment}>
          <FormGroup>
            <Input
              id="body"
              value={body}
              onChange={this.handleChange}
              type="textarea"
              name="text"
              placeholder="comment on this article..."
              style={{ backgroundColor: "lightgray" }}
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

  addNewComment = event => {
    event.preventDefault();
    const { body } = this.state;
    const { article_id, user, addToComments } = this.props;
    const newComment = { body, username: user };
    api.addComment(article_id, newComment).then(({ data }) => {
      addToComments(data);
    });
    // navigate(`/articles/${article_id}`, {
    //   state: {
    //     addedComment: newComment.body
    //   }
    // });
  };
}
