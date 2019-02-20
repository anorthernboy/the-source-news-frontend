import React from "react";
import "./SingleArticleCard.css";
import usericon from "./single-user.png";

const SingleArticleCard = ({ articles }) => {
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
      <h6 className="comments">comments: {articles.comment_count}</h6>
      <h6 className="votes">votes: {articles.votes}</h6>
    </div>
  );
};

export default SingleArticleCard;
