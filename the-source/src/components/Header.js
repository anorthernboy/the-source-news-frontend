import React from "react";
import { Link } from "@reach/router";
import usericon from "./single-user.png";

const Header = () => {
  return (
    <div className="header">
      <Link to={`/`}>
        <span>
          the <span style={{ fontWeight: "bold" }}>source</span>
        </span>
      </Link>
      <span>
        <span>sign in </span>
        <img src={usericon} alt="" width="25px" height="25px" />
      </span>
    </div>
  );
};

export default Header;
