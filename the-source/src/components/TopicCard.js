import React from "react";

const TopicCard = ({ topics }) => {
  return (
    <a href={`/topics/${topics.slug}/articles`} className="article-card">
      <h6 className="topic">
        <img src="list.png" alt="topic icon" width="15px" height="15px" />
        <span> </span>
        {topics.slug}
      </h6>
      <h3 className="title">
        {topics.description.slice(0, 50).trim() + "..."}
      </h3>
    </a>
  );
};

export default TopicCard;
