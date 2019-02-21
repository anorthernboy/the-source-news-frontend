import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../api/api";
import ArticleView from "../views/ArticleView";
import CommentCard from "../cards/CommentCard";

class Article extends Component {
  state = {
    article: {},
    comments: []
  };

  render() {
    const { article, comments } = this.state;
    const { user } = this.props;
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
            <ArticleView user={user} articles={article} />
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
                  user={user}
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

  componentDidMount = () => {
    this.fetchArticle();
    this.fetchComments();
  };

  fetchArticle = () => {
    const { article_id } = this.props;
    api.getArticle(article_id).then(({ data }) =>
      this.setState({
        article: data
      })
    );
  };

  fetchComments = () => {
    const { article_id } = this.props;
    api.getComments(article_id).then(({ data }) =>
      this.setState({
        comments: data.comments
      })
    );
  };
}

export default Article;
