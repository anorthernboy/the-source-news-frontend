import React, { Component } from "react";
import * as api from "../api/api";
import FetchArticles from "./FetchArticles";
import "./Articles.css";

class ArticlesByUser extends Component {
  state = {
    users: []
  };

  render() {
    const { username } = this.props;
    const { users } = this.state;
    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">{username}</h2>

          <div className="section-menu dropdown">
            <a className="dropbtn" href="#">
              <img src="menu.png" alt="menu" width="28px" height="28px" />
            </a>
            <div className="dropdown-content">
              {users.map(user => (
                <a
                  key={user.username}
                  href={`/users/${user.username}/articles`}
                >
                  <h4>{user.username}</h4>
                </a>
              ))}
            </div>
          </div>

          <br />
          <div className="section-main">
            <FetchArticles username={username} query={"limit=100000"} />
          </div>
          <br />
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    api.getUsers().then(({ data }) => this.setState({ users: data.users }));
  };
}

export default ArticlesByUser;
