import React from "react";
import "./ArticleAndCommentCard.css";

const ArticleAndCommentCard = ({ articles }) => {
  return (
    <div className="article-comment-card">
      <h6 className="author">
        <img
          src="./single-user.png"
          alt="user icon"
          width="15px"
          height="15px"
        />
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

export default ArticleAndCommentCard;
