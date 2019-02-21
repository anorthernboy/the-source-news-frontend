import React, { Component } from "react";
import * as api from "../../api/api";
import TopicCard from "../cards/TopicCard";
import PostTopic from "../PostTopic";

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
        </div>
        <div className="main-section-head">
          <div className="section-main">
            {topics.map(topic => (
              <div key={topic.slug}>
                <TopicCard topics={topic} />
              </div>
            ))}
          </div>
        </div>
        <div className="main-section-head">
          <h2 className="section-title">add topic</h2>
        </div>
        <div className="main-section-head">
          <div className="section-main">
            <PostTopic />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    api.getTopics().then(({ data }) => this.setState({ topics: data.topics }));
  };
}

export default Topics;
