import React from "react";
import ArticleVoter from "./ArticleVoter";
import "./SingleArticleCard.css";
import usericon from "./single-user.png";
import commenticon from "./comment.png";
import posticon from "./post.png";
import deleteicon from "./delete.png";

const ArticleView = ({ articles }) => {
  return (
    <div className="single-article-card">
      <h6 className="author">
        <img src={usericon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.author}
      </h6>
      <button className="author">
        <img src={posticon} alt="post icon" width="15px" height="15px" />
      </button>
      <button className="author">
        <img src={deleteicon} alt="delete icon" width="15px" height="15px" />
      </button>
      <h6 className="time">{articles.created_at}</h6>
      <h3 className="title">{articles.title}</h3>
      <h6 className="body">{articles.body}</h6>
      <h6 className="comment-vote">
        <img src={commenticon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.comment_count}
      </h6>
      <div className="votes">
        <ArticleVoter votes={articles.votes} article_id={articles.article_id} />
      </div>
    </div>
  );
};

export default ArticleView;