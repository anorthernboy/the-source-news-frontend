import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../api/api";
import CommentDelete from "../buttons/CommentDelete";
import CommentVoter from "../buttons/CommentVoter";
import "../style/CommentCard.css";
import usericon from "../icons/single-user.png";

class UserCommentCard extends Component {
  state = {
    article: ""
  };

  render() {
    const { comments, user, username } = this.props;
    const { article } = this.state;
    return (
      <div>
        <div className="comment-card">
          <Link to={`/articles/${comments.article_id}`} className="body">
            <h3>{article.slice(0, 50).trim() + "..."}</h3>
          </Link>
        </div>
        <div className="comment-card">
          <div className="comment-author">
            <img src={usericon} alt="user icon" width="15px" height="15px" />
            <span> </span>
            {comments.username}
          </div>
          <div className="comment-delete">
            <CommentDelete
              user={user}
              username={username}
              author={comments.username}
              article_id={comments.article_id}
              comment_id={comments.comment_id}
            />
          </div>
          <h6 className="body">{comments.body}</h6>
        </div>
        <div className="comment-card-time">
          <h6 className="comment-time">
            {new Date(comments.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </h6>
          <div className="comment-votes">
            <CommentVoter
              votes={comments.votes}
              comment_id={comments.comment_id}
              article_id={comments.article_id}
              author={comments.username}
              user={user}
              username={username}
            />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchArticle();
  };

  fetchArticle = () => {
    const { comments } = this.props;
    api
      .getArticle(comments.article_id)
      .then(({ data }) => this.setState({ article: data.title }));
  };
}

export default UserCommentCard;
