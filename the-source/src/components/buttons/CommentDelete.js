import React, { Component } from "react";
import * as api from "../../api/api";
import deleteicon from "../icons/delete.png";

class CommentDelete extends Component {
  render() {
    const { author, user } = this.props;
    return (
      <div>
        <button
          className="author"
          onClick={this.removeComment}
          disabled={author !== user}
        >
          <img src={deleteicon} alt="delete icon" width="15px" height="15px" />
        </button>
      </div>
    );
  }

  removeComment = () => {
    const { article_id, comment_id } = this.props;
    api.deleteComment(article_id, comment_id);
    this.setState();
  };
}

export default CommentDelete;
