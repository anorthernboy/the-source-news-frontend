import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="main-nav">
        <span>
          <img src="open-book.png" alt="" width="25px" height="25px" />
        </span>
        <span>
          <img src="list.png" alt="" width="25px" height="25px" />
        </span>
        <span>
          <img src="multiple-users.png" alt="" width="30px" height="30px" />
        </span>
        <span>
          <img src="logout.png" alt="" width="25px" height="25px" />
        </span>
      </div>
    );
  }
}

export default Nav;
