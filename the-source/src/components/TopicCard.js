import React from "react";
import { Link } from "@reach/router";
import topicsicon from "./list.png";

const TopicCard = ({ topics }) => {
  return (
    <Link to={`/topics/${topics.slug}/articles`} className="article-card">
      <h6 className="topic">
        <img src={topicsicon} alt="topic icon" width="15px" height="15px" />
        <span> </span>
        {topics.slug}
      </h6>
      <h3 className="title">
        {topics.description.slice(0, 50).trim() + "..."}
      </h3>
    </Link>
  );
};

export default TopicCard;
