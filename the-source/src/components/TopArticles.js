import React, { Component } from "react";
import * as api from "./api/api";

class TopArticles extends Component {
  state = {
    articles: []
  };

  render() {
    const { articles } = this.state;
    return (
      <div>
        {articles.map(article => (
          <div key={article.article_id}>
            <h4>{article.title}</h4>
            <h6>{article.author}</h6>
          </div>
        ))}
      </div>
    );
  }

  componentDidMount = props => {
    const { query } = this.props;
    api
      .getArticles(null, null, query)
      .then(({ data }) => this.setState({ articles: data.articles }));
  };
}
export default TopArticles;
