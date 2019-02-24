import React, { Component } from "react";
import { navigate } from "@reach/router";
import * as api from "../../api/api";
import deleteicon from "../icons/delete.png";

class ArticleDelete extends Component {
  render() {
    const { author, user } = this.props;
    return (
      <div>
        <button
          className="author"
          onClick={this.removeArticle}
          disabled={author !== user}
        >
          <img src={deleteicon} alt="delete icon" width="20px" height="20px" />
        </button>
      </div>
    );
  }

  removeArticle = () => {
    const { article_id, topic, title } = this.props;
    api.deleteArticle(article_id);
    navigate(`/topics/${topic}/articles`, {
      state: { deletedArticle: title }
    });
  };
}

export default ArticleDelete;
