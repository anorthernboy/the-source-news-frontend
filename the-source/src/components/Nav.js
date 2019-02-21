import React, { Component } from "react";
import { Link } from "@reach/router";
import articlesicon from "./icons/open-book.png";
import topicsicon from "./icons/list.png";
import usersicon from "./icons/multiple-users.png";
import logouticon from "./icons/logout.png";

class Nav extends Component {
  render() {
    return (
      <div className="main-nav">
        <Link to={`/articles`}>
          <span>
            <img src={articlesicon} alt="articles" width="25px" height="25px" />
          </span>
        </Link>
        <Link to={`/topics`}>
          <span>
            <img src={topicsicon} alt="topics" width="25px" height="25px" />
          </span>
        </Link>
        <Link to={`/users`}>
          <span>
            <img src={usersicon} alt="users" width="30px" height="30px" />
          </span>
        </Link>

        <span>
          <button onClick={() => this.props.logout()}>
            <img src={logouticon} alt="logout" width="25px" height="25px" />
          </button>
        </span>
      </div>
    );
  }
}

export default Nav;
