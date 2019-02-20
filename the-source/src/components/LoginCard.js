import React from "react";
import { Link } from "@reach/router";
import "./UserCard.css";
import usericon from "./single-user.png";

const TopicCard = ({ users, handleClick }) => {
  return (
    <div
      className="user-button"
      onClick={handleClick}
      value={`${users.username}`}
    >
      <Link to="/" className="user-card">
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
    </div>
  );
};

export default TopicCard;
