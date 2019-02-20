import React, { Component } from "react";
import upvoteicon from "./like.png";
import downvoteicon from "./unlike.png";

class CommentVoter extends Component {
  render() {
    return (
      <div>
        <img
          src={upvoteicon}
          alt="up-vote"
          className="up-vote"
          width="15px"
          height="15px"
        />
        <span> </span>
        <img
          src={downvoteicon}
          alt="down-vote"
          className="down-vote"
          width="15px"
          height="15px"
        />
      </div>
    );
  }
}

export default CommentVoter;
