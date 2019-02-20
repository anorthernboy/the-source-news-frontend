import React from "react";
import "./SingleArticleCard.css";
import usericon from "./single-user.png";
import upvoteicon from "./like.png";
import commenticon from "./comment.png";

const SingleArticleCard = ({ articles }) => {
  console.log(typeof articles.created_at);
  return (
    <div className="single-article-card">
      <h6 className="author">
        <img src={usericon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.author}
      </h6>
      <h6 className="time">{articles.created_at}</h6>
      <h3 className="title">{articles.title}</h3>
      <h6 className="body">{articles.body}</h6>
      <h6 className="comment-vote">
        <img src={commenticon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.comment_count}
        <span> </span>
        <img src={upvoteicon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.votes}
      </h6>
    </div>
  );
};

export default SingleArticleCard;
