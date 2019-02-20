import React from "react";
import { Link } from "@reach/router";
import topicsicon from "./list.png";
import posticon from "./post.png";

const TopicCard = ({ topics }) => {
  return (
    <div className="article-card">
      <h6 className="topic">
        <img src={topicsicon} alt="topic icon" width="15px" height="15px" />
        <span> </span>
        {topics.slug}
      </h6>
      <button className="author">
        <img src={posticon} alt="post icon" width="15px" height="15px" />
      </button>
      <h3 className="title">
        <Link to={`/topics/${topics.slug}/articles`}>
          {topics.description.slice(0, 50).trim() + "..."}
        </Link>
      </h3>
    </div>
  );
};

export default TopicCard;
