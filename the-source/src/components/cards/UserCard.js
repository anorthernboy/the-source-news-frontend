import React from "react";
import { Link } from "@reach/router";
import "../style/UserCard.css";
import usericon from "../icons/single-user.png";

const UserCard = ({ users }) => {
  return (
    <Link to={`/users/${users.username}/articles`} className="user-card">
      <img
        className="image responsive-icon-large"
        src={usericon}
        alt="user"
        width="100px"
        height="100px"
      />
      <h6 className="name responsive-font">{users.name}</h6>
      <h3 className="username responsive-font">{users.username}</h3>
    </Link>
  );
};

export default UserCard;
