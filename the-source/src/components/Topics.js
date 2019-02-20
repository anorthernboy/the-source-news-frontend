import React, { Component } from "react";
import * as api from "../api/api";
import TopicCard from "./TopicCard";
import posticon from "./post.png";

class Topics extends Component {
  state = {
    topics: []
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">topics</h2>
          <div className="section-menu dropdown">
            <p className="dropbtn">
              <img src={posticon} alt="menu" width="28px" height="28px" />
            </p>
          </div>
          <div className="section-main">
            {topics.map(topic => (
              <div key={topic.slug}>
                <TopicCard topics={topic} />
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    api.getTopics().then(({ data }) => this.setState({ topics: data.topics }));
  };
}

export default Topics;

// {
//   topics.map(topic => (
//     <div key={topic.slug}>
//       <Link to={`/topics/${topic.slug}`}>
//         <h4>{topic.slug}</h4>
//       </Link>
//       <h6>{topic.description}</h6>
//     </div>
//   ))
// }
