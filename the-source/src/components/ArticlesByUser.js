import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api/api";
import FetchArticles from "./FetchArticles";
import "./Articles.css";
import menuicon from "./menu.png";

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
            <FetchArticles username={username} query={"limit=100000"} />
          </div>
          <br />
        </div>
      </div>
    );
  }

  componentDidUpdate = prevProps => {
    console.log(prevProps.username, this.props.username);
    if (prevProps.username !== this.props.username) {
      this.setState();
    }
  };

  componentDidMount = () => {
    api.getUsers().then(({ data }) => this.setState({ users: data.users }));
  };
}

export default ArticlesByUser;
