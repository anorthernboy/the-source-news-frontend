import React, { Component } from "react";
import { navigate } from "@reach/router";
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
          <img src={deleteicon} alt="delete icon" width="20px" height="20px" />
        </button>
      </div>
    );
  }

  removeComment = () => {
    const { article_id, comment_id } = this.props;
    api.deleteComment(article_id, comment_id);
    navigate(`/articles/${article_id}`, {
      state: { deletedComment: true }
    });
  };
}

export default CommentDelete;
