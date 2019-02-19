import React, { Component } from "react";
import * as api from "../api/api";

class Topics extends Component {
  state = {
    topics: []
  };

  render() {
    const { topics } = this.state;
    return (
      <div>
        <h1>THIS IS Topics</h1>
        {topics.map(topic => (
          <div key={topic.slug}>
            <h4>{topic.slug}</h4>
            <h6>{topic.description}</h6>
          </div>
        ))}
      </div>
    );
  }

  componentDidMount = () => {
    api.getTopics().then(({ data }) => this.setState({ topics: data.topics }));
  };
}

export default Topics;
