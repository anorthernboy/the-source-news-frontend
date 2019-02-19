import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="main-nav">
        <a href={`/articles`}>
          <span>
            <img
              src="open-book.png"
              alt="articles"
              width="25px"
              height="25px"
            />
          </span>
        </a>
        <span>
          <img src="open-book.png" alt="articles" width="25px" height="25px" />
        </span>

        <span>
          <img src="list.png" alt="topics" width="25px" height="25px" />
        </span>
        <span>
          <img
            src="multiple-users.png"
            alt="users"
            width="30px"
            height="30px"
          />
        </span>
        <span>
          <img src="logout.png" alt="logout" width="25px" height="25px" />
        </span>
      </div>
    );
  }
}

export default Nav;
