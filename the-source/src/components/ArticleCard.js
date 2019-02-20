import React from "react";
import { Link } from "@reach/router";
import "./ArticleCard.css";
import topicsicon from "./list.png";
import usericon from "./single-user.png";
import upvoteicon from "./like.png";
import commenticon from "./comment.png";

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
      <h6 className="comment-vote">
        <img src={commenticon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.comment_count}
        <span> </span>
        <img src={upvoteicon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.votes}
      </h6>
    </Link>
  );
};

export default ArticleCard;
