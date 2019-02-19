import React from "react";
import "./ArticleCard.css";

const ArticleCard = ({ articles }) => {
  return (
    <a href={`/articles/${articles.article_id}`} className="article-card">
      <h6 className="author">
        <img src="single-user.png" alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.author}
      </h6>
      <h6 className="time">{articles.created_at}</h6>
      <h3 className="title">{articles.title.slice(0, 50).trim() + "..."}</h3>
      <h6 className="topic">
        <img src="list.png" alt="topic icon" width="15px" height="15px" />
        <span> </span>
        {articles.topic}
      </h6>
      <h6 className="comments">comments: {articles.comment_count}</h6>
      <h6 className="votes">votes: {articles.votes}</h6>
    </a>
  );
};

export default ArticleCard;
