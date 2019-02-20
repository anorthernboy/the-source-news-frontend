import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api/api";
import ArticleCard from "./ArticleCard";
import "./Articles.css";
import menuicon from "./menu.png";

class ArticlesByUser extends Component {
  state = {
    users: [],
    articles: []
  };

  render() {
    const { username } = this.props;
    const { users, articles } = this.state;
    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">{username}</h2>

          <div className="section-menu dropdown">
            <p className="dropbtn">
              <img src={menuicon} alt="menu" width="28px" height="28px" />
            </p>
            <div className="dropdown-content">
              {users.map(user => (
                <Link
                  key={user.username}
                  to={`/users/${user.username}/articles`}
                >
                  <h4>{user.username}</h4>
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

  componentDidUpdate = prevProps => {
    if (this.props.username !== prevProps.username) {
      this.fetchArticles();
    }
  };

  componentDidMount = () => {
    this.fetchUsers();
    this.fetchArticles();
  };

  fetchUsers = () => {
    api.getUsers().then(({ data }) => this.setState({ users: data.users }));
  };

  fetchArticles = () => {
    const { topic, username, query } = this.props;
    api
      .getArticles(topic, username, query)
      .then(({ data }) => this.setState({ articles: data.articles }));
  };
}

export default ArticlesByUser;
