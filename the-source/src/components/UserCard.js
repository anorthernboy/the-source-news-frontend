import React from "react";
import "./UserCard.css";

const TopicCard = ({ users }) => {
  return (
    <a href={`/users/${users.username}/articles`} className="user-card">
      <img
        className="image"
        src="single-user.png"
        alt="user"
        width="100px"
        height="100px"
      />
      <h6 className="name">{users.name}</h6>
      <h3 className="username">{users.username}</h3>
    </a>
  );
};

export default TopicCard;
