import React from "react";
import { Link } from "@reach/router";
import topicsicon from "../icons/list.png";

const TopicCard = ({ topics }) => {
  return (
    <div className="article-card">
      <h6 className="topic responsive-font">
        <img src={topicsicon} alt="topic icon" width="15px" height="15px" />
        <span> </span>
        {topics.slug}
      </h6>
      <h3 className="title responsive-font">
        <Link to={`/topics/${topics.slug}/articles`}>
          {topics.description.slice(0, 50).trim() + "..."}
        </Link>
      </h3>
    </div>
  );
};

export default TopicCard;
