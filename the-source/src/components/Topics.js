import React, { Component } from "react";
import * as api from "../api/api";
import TopicCard from "./TopicCard";

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
          <br />
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
