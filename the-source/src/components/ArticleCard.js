import React from "react";
import { Link } from "@reach/router";
import "./ArticleCard.css";
import topicsicon from "./list.png";
import usericon from "./single-user.png";

const ArticleCard = ({ articles }) => {
  return (
    <Link to={`/articles/${articles.article_id}`} className="article-card">
      <h6 className="author">
        <img src={usericon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.author}
      </h6>
      <h6 className="time">{articles.created_at.slice(0, 10)}</h6>
      <h3 className="title">{articles.title.slice(0, 50).trim() + "..."}</h3>
      <h6 className="topic">
        <img src={topicsicon} alt="topic icon" width="15px" height="15px" />
        <span> </span>
        {articles.topic}
      </h6>
      <h6 className="comments">comments: {articles.comment_count}</h6>
      <h6 className="votes">votes: {articles.votes}</h6>
    </Link>
  );
};

export default ArticleCard;
