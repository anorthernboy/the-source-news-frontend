import React from "react";
import { Link } from "@reach/router";
import "../style/ArticleCard.css";
import topicsicon from "../icons/list.png";
import usericon from "../icons/single-user.png";
import upvoteicon from "../icons/like.png";
import commenticon from "../icons/comment.png";

const ArticleCard = ({ articles }) => {
  return (
    <Link to={`/articles/${articles.article_id}`} className="article-card">
      <h6 className="author">
        <img src={usericon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.author}
      </h6>
      <h6 className="time">
        {new Date(articles.created_at).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric"
        })}
      </h6>

      <h3 className="title">{articles.title.slice(0, 50).trim() + "..."}</h3>
      <h6 className="topic">
        <img src={topicsicon} alt="topic icon" width="15px" height="15px" />
        <span> </span>
        {articles.topic}
      </h6>
      <h6 className="comment-vote">
        <img src={commenticon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.comment_count || 0}
        <span> </span>
        <img src={upvoteicon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.votes || 0}
      </h6>
    </Link>
  );
};

export default ArticleCard;
