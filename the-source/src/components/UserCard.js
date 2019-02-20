import React from "react";
import { Link } from "@reach/router";
import "./UserCard.css";
import usericon from "./single-user.png";

const TopicCard = ({ users }) => {
  return (
    <Link to={`/users/${users.username}/articles`} className="user-card">
      <img
        className="image"
        src={usericon}
        alt="user"
        width="100px"
        height="100px"
      />
      <h6 className="name">{users.name}</h6>
      <h3 className="username">{users.username}</h3>
    </Link>
  );
};

export default TopicCard;
