import React, { Component } from "react";
import * as api from "../api/api";

class Article extends Component {
  state = {
    article: {}
  };

  render() {
    const { article_id } = this.props;
    const { article } = this.state;
    return (
      <div>
        <h1>{`THIS IS ARTICLE ${article_id}`}</h1>
        <br />
        <h4>{article.title}</h4>
        <br />
        <p>{article.body}</p>
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
