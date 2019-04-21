import React from "react";
import "../style/UserCard.css";
import usericon from "../icons/single-user.png";

const LoginCard = ({ users }) => {
  return (
    <div className="user-button">
      <div className="user-card">
        <img
          className="image responsive-icon-large"
          src={usericon}
          alt="user"
          width="100px"
          height="100px"
        />
        <h6 className="name responsive-font">{users.name}</h6>
        <h3 className="username responsive-font">{users.username}</h3>
      </div>
    </div>
  );
};

export default LoginCard;
