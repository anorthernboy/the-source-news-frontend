import React from "react";
import { Link } from "@reach/router";
import ArticleVoter from "../buttons/ArticleVoter";
import "../style/ArticleView.css";
import usericon from "../icons/single-user.png";
import commenticon from "../icons/comment.png";
import ArticleDelete from "../buttons/ArticleDelete";

const ArticleView = ({ articles, user }) => {
  return (
    <div>
      <div className="single-article-card">
        <Link
          to={`/users/${articles.author}/articles`}
          className="article-author"
        >
          <img src={usericon} alt="user icon" width="15px" height="15px" />
          <span> </span>
          {articles.author}
        </Link>
        <div className="article-delete">
          <ArticleDelete
            user={user}
            author={articles.author}
            article_id={articles.article_id}
            topic={articles.topic}
            title={articles.title}
          />
        </div>
        <h3 className="article-title">{articles.title}</h3>
        <h6 className="body">{articles.body}</h6>
        <h6 className="article-comments">
          <img src={commenticon} alt="user icon" width="15px" height="15px" />
          <span> </span>
          {articles.comment_count}
        </h6>
      </div>

      <div className="article-card-time">
        <h6 className="article-time">
          {new Date(articles.created_at).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric"
          })}
        </h6>
        <div className="article-votes">
          <ArticleVoter
            votes={articles.votes}
            article_id={articles.article_id}
            author={articles.author}
            user={user}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleView;
