import React from "react";
import ArticleVoter from "../buttons/ArticleVoter";
import "../style/SingleArticleCard.css";
import usericon from "../icons/single-user.png";
import commenticon from "../icons/comment.png";
import ArticleDelete from "../buttons/ArticleDelete";

const ArticleView = ({ articles, user }) => {
  return (
    <div className="single-article-card">
      <h6 className="author">
        <img src={usericon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.author}
      </h6>
      <ArticleDelete
        user={user}
        author={articles.author}
        article_id={articles.article_id}
      />
      <h6 className="time">{articles.created_at}</h6>
      <h3 className="title">{articles.title}</h3>
      <h6 className="body">{articles.body}</h6>
      <h6 className="comment-vote">
        <img src={commenticon} alt="user icon" width="15px" height="15px" />
        <span> </span>
        {articles.comment_count}
      </h6>
      <div className="votes">
        <ArticleVoter
          votes={articles.votes}
          article_id={articles.article_id}
          author={articles.author}
          user={user}
        />
      </div>
    </div>
  );
};

export default ArticleView;
