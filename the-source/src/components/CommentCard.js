import React from "react";
import CommentVoter from "./CommentVoter";
import "./CommentCard.css";
import usericon from "./single-user.png";
import upvoteicon from "./like.png";

const CommentCard = ({ comments }) => {
  return (
    <div className="comment-card">
      <h6 className="author">
        <img src={usericon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {comments.author}
      </h6>
      <h6 className="time">{comments.created_at.slice(0, 10)}</h6>
      <h6 className="body">{comments.body}</h6>
      <h6 className="votes">
        <img src={upvoteicon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {comments.votes}
      </h6>
      <div className="voting">
        <CommentVoter />
      </div>
    </div>
  );
};

export default CommentCard;
