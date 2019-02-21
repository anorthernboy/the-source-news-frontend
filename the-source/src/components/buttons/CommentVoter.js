import React, { Component } from "react";
import * as api from "../../api/api";
import upvoteicon from "../icons/like.png";
import downvoteicon from "../icons/unlike.png";
import pollicon from "../icons/poll.png";

class CommentVoter extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { votes, author, user } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        <img
          src={pollicon}
          alt="up-vote"
          className="up-vote"
          width="15px"
          height="15px"
        />
        <button
          onClick={() => this.addVote(1)}
          disabled={voteChange === 1 || author === user}
        >
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

        <button
          onClick={() => this.addVote(-1)}
          disabled={voteChange === -1 || author === user}
        >
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
    const { article_id, comment_id } = this.props;
    const { voteChange } = this.state;
    const inc_vote = { inc_votes: direction };
    api.commentVote(article_id, comment_id, inc_vote);
    this.setState({ voteChange: voteChange + direction });
  };
}

export default CommentVoter;
