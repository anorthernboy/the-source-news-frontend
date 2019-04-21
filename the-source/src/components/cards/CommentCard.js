import React from "react";
import { Link } from "@reach/router";
import CommentVoter from "../buttons/CommentVoter";
import "../style/CommentCard.css";
import usericon from "../icons/single-user.png";
import CommentDelete from "../buttons/CommentDelete";

const CommentCard = ({ comments, article_id, user, removeFromComments }) => {
  return (
    <div>
      <div className="comment-card">
        <Link
          to={`/users/${comments.author}/articles`}
          className="comment-author responsive-font"
        >
          <img
            className="responsive-icon-small"
            src={usericon}
            alt="user icon"
            width="15px"
            height="15px"
          />
          <span> </span>
          {comments.author}
        </Link>
        <div className="comment-delete">
          <CommentDelete
            user={user}
            author={comments.author}
            article_id={article_id}
            comment_id={comments.comment_id}
            removeFromComments={removeFromComments}
          />
        </div>
        <h6 className="body responsive-font">{comments.body}</h6>
      </div>
      <div className="comment-card-time">
        <h6 className="comment-time responsive-font">
          {new Date(comments.created_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric"
          })}
        </h6>
        <div className="comment-votes responsive-font">
          <CommentVoter
            votes={comments.votes}
            comment_id={comments.comment_id}
            article_id={article_id}
            author={comments.author}
            user={user}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
