import React from "react";

const Header = () => {
  return (
    <div className="header">
      <span>
        the <span style={{ fontWeight: "bold" }}>source</span>
      </span>
      <span>
        <span>sign in </span>
        <img src="single-user.png" alt="" width="25px" height="25px" />
      </span>
    </div>
  );
};

export default Header;
