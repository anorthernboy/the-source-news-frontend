import React, { Component } from "react";
import * as api from "../api/api";
import ArticleAndCommentCard from "./ArticleAndCommentCard";

class Article extends Component {
  state = {
    article: {}
  };

  render() {
    const { article } = this.state;
    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">{article.topic}</h2>

          <br />
          <div className="section-main">
            <ArticleAndCommentCard articles={article} />
          </div>
          <br />
        </div>
      </div>
    );
  }

  componentDidMount = props => {
    const { article_id } = this.props;
    api
      .getArticle(article_id)
      .then(({ data }) => this.setState({ article: data }));
  };
}

export default Article;
