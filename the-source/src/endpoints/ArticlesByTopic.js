import React, { Component } from "react";
import TopArticles from "../components/TopArticles";
import PostArticle from "../components/PostArticle";

class ArticlesByTopic extends Component {
  render() {
    const { topic } = this.props;
    return (
      <div>
        <h1>{`THIS IS ${topic} ARTICLES`}</h1>
        <br />
        <TopArticles topic={topic} />
        <br />
        <PostArticle topic={topic} />
      </div>
    );
  }
}

export default ArticlesByTopic;
