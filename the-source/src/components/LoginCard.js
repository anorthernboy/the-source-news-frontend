import React from "react";
import "./UserCard.css";
import usericon from "./single-user.png";

const TopicCard = ({ users }) => {
  return (
    <div className="user-button">
      <div className="user-card">
        <img
          className="image"
          src={usericon}
          alt="user"
          width="100px"
          height="100px"
        />
        <h6 className="name">{users.name}</h6>
        <h3 className="username">{users.username}</h3>
      </div>
    </div>
  );
};

export default TopicCard;
