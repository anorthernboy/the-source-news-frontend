import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../api/api";
import ArticleCard from "../cards/ArticleCard";
import UserCommentCard from "../cards/UserCommentCard";
import "../style/Articles.css";
import menuicon from "../icons/menu.png";
import sorticon from "../icons/sort.png";
import commenticon from "../icons/comment.png";
import upvoteicon from "../icons/like.png";
import timeicon from "../icons/calendar.png";

class ArticlesByUser extends Component {
  state = {
    users: [],
    articles: [],
    comments: []
  };

  render() {
    const { user, username } = this.props;
    const { users, articles, comments } = this.state;
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
          <div className="section-sort">
            <div className="sort-button">
              <img src={sorticon} alt="menu" width="22px" height="22px" />
              <span> </span>
              <img src={timeicon} alt="menu" width="22px" height="22px" />
            </div>
            <div className="sort-button">
              <img src={sorticon} alt="menu" width="22px" height="22px" />
              <span> </span>
              <img src={commenticon} alt="menu" width="22px" height="22px" />
            </div>
            <div className="sort-button">
              <img src={sorticon} alt="menu" width="22px" height="22px" />
              <span> </span>
              <img src={upvoteicon} alt="menu" width="22px" height="22px" />
            </div>
          </div>
        </div>

        <div className="main-section-head">
          <h2 className="section-title">articles</h2>
        </div>

        <div className="main-section-head">
          <div className="section-main">
            {articles.map(article => (
              <div key={article.article_id}>
                <ArticleCard articles={article} />
              </div>
            ))}
          </div>
        </div>

        <div className="main-section-head">
          <h2 className="section-title">comments</h2>
        </div>

        <div className="main-section-head">
          <div className="section-main">
            {comments
              .filter(comment => comment.username === user)
              .map(comment => (
                <div key={comment.comment_id}>
                  <UserCommentCard comments={comment} user={user} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate = prevProps => {
    if (this.props.username !== prevProps.username) {
      this.fetchArticles();
      this.fetchComments();
    }
  };

  componentDidMount = () => {
    this.fetchUsers();
    this.fetchArticles();
    this.fetchComments();
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

  fetchComments = () => {
    api
      .getAllComments()
      .then(({ data }) => this.setState({ comments: data.comments }));
  };
}

export default ArticlesByUser;
