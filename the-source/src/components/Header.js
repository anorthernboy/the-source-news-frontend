import React from "react";
import { Link } from "@reach/router";
import thesource from "./icons/thesource.png";
import usericon from "./icons/single-user.png";
import "./style/Header.css";

const Header = ({ user }) => {
  return (
    <div className="header">
      <Link to={`/`} className="header-logo">
        <img src={thesource} alt="" width="50%" height="50%" />
      </Link>
      <Link to={`/users/${user}/articles`}>
        <button className="user-button">
          <p className="header-username responsive-font">{user}</p>
          <img src={usericon} alt="" width="25px" height="25px" />
        </button>
      </Link>
    </div>
  );
};

export default Header;
