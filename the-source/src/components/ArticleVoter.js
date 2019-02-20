import React, { Component } from "react";
import * as api from "../api/api";
import upvoteicon from "./like.png";
import downvoteicon from "./unlike.png";

class ArticleVoter extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        <button onClick={() => this.addVote(1)} disabled={voteChange === 1}>
          <img
            src={upvoteicon}
            alt="up-vote"
            className="up-vote"
            width="15px"
            height="15px"
          />
        </button>

        <span> </span>
        <p>{votes + voteChange}</p>
        <span> </span>

        <button onClick={() => this.addVote(-1)} disabled={voteChange === -1}>
          <img
            src={downvoteicon}
            alt="down-vote"
            className="down-vote"
            width="15px"
            height="15px"
          />
        </button>
      </div>
    );
  }

  addVote = direction => {
    const { article_id } = this.props;
    const { voteChange } = this.state;
    const inc_vote = { inc_votes: direction };
    api.articleVote(article_id, inc_vote);
    this.setState({ voteChange: voteChange + direction });
  };
}

export default ArticleVoter;
