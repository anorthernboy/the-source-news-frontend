import React from "react";
import { Link } from "@reach/router";
import usericon from "./single-user.png";

const Header = ({ user }) => {
  return (
    <div className="header">
      <Link to={`/`}>
        <span>
          the <span style={{ fontWeight: "bold" }}>source</span>
        </span>
      </Link>
      <button>
        <p>{user}</p>
        <img src={usericon} alt="" width="25px" height="25px" />
      </button>
    </div>
  );
};

export default Header;
