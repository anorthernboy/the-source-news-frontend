import React from "react";
import { Link } from "@reach/router";
import usericon from "./icons/single-user.png";

const Header = ({ user }) => {
  return (
    <div className="header">
      <Link to={`/`}>
        <span>
          the <span style={{ fontWeight: "bold" }}>source</span>
        </span>
      </Link>
      <Link to={`/users/${user}/articles`}>
        <button>
          <img src={usericon} alt="" width="25px" height="25px" />
          <p>{user}</p>
        </button>
      </Link>
    </div>
  );
};

export default Header;
