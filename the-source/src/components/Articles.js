import React, { Component } from "react";
import * as api from "../api/api";
import { Link } from "@reach/router";
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(article => (
          <div key={article.article_id}>
            <ArticleCard articles={article} />
          </div>
        ))}
      </div>
    );
  }

  componentDidMount = props => {
    const { topic, username, query } = this.props;
    api
      .getArticles(topic, username, query)
      .then(({ data }) => this.setState({ articles: data.articles }));
  };
}
export default Articles;
