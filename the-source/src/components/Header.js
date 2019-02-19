import React from "react";

const Header = () => {
  return (
    <div className="header">
      <a href={`/`}>
        <span>
          the <span style={{ fontWeight: "bold" }}>source</span>
        </span>
      </a>
      <span>
        <span>sign in </span>
        <img src="single-user.png" alt="" width="25px" height="25px" />
      </span>
    </div>
  );
};

export default Header;
