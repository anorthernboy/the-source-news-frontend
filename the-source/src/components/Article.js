import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api/api";
import SingleArticleCard from "./SingleArticleCard";
import CommentCard from "./CommentCard";

class Article extends Component {
  state = {
    article: {},
    comments: []
  };

  render() {
    const { article, comments } = this.state;
    return (
      <div className="main-home">
        <div className="main-section-head">
          <Link
            to={`/topics/${article.topic}/articles`}
            className="section-title"
          >
            <h2>{article.topic}</h2>
          </Link>
          <br />
          <div className="section-main">
            <SingleArticleCard articles={article} />
          </div>
          <br />
        </div>
        <div className="main-section-head">
          <h2 className="section-title">comments</h2>
          <br />
          <div className="section-main">
            {comments.map(comment => (
              <div key={comment.comment_id}>
                <CommentCard
                  comments={comment}
                  article_id={article.article_id}
                />
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
    );
  }

  componentDidMount = props => {
    const { article_id } = this.props;
    Promise.all([api.getArticle(article_id), api.getComments(article_id)]).then(
      ([article, comments]) =>
        this.setState({
          article: article.data,
          comments: comments.data.comments
        })
    );
  };
}

export default Article;
