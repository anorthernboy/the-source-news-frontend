import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api/api";
import ArticleCard from "./ArticleCard";
import "./Articles.css";
import menuicon from "./menu.png";

class Articles extends Component {
  state = {
    topics: [],
    articles: []
  };

  render() {
    const { topics, articles } = this.state;
    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">articles</h2>

          <div className="section-menu dropdown">
            <p className="dropbtn">
              <img src={menuicon} alt="menu" width="28px" height="28px" />
            </p>
            <div className="dropdown-content">
              {topics.map(topic => (
                <Link key={topic.slug} to={`/topics/${topic.slug}/articles`}>
                  <h4>{topic.slug}</h4>
                </Link>
              ))}
            </div>
          </div>

          <br />
          <div className="section-main">
            {articles.map(article => (
              <div key={article.article_id}>
                <ArticleCard articles={article} />
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchTopics();
    this.fetchArticles();
  };

  fetchTopics = () => {
    api.getTopics().then(({ data }) => this.setState({ topics: data.topics }));
  };

  fetchArticles = () => {
    const { topic, username, query } = this.props;
    api
      .getArticles(topic, username, query)
      .then(({ data }) => this.setState({ articles: data.articles }));
  };
}

export default Articles;
