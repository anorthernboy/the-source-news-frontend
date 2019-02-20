import React from "react";
import "./CommentCard.css";
import usericon from "./single-user.png";

const CommentCard = ({ comments }) => {
  return (
    <div className="comment-card">
      <h6 className="author">
        <img src={usericon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {comments.author}
      </h6>
      <h6 className="time">{comments.created_at}</h6>
      <h6 className="body">{comments.body}</h6>
      <h6 className="votes">votes: {comments.votes}</h6>
    </div>
  );
};

export default CommentCard;
