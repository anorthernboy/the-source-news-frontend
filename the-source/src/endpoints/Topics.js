import React, { Component } from "react";
import * as api from "../api/api";
import PostTopic from "../components/PostTopic";
import { Link } from "@reach/router";

class Topics extends Component {
  state = {
    topics: []
  };

  render() {
    const { topics } = this.state;
    return (
      <div>
        <h1>THIS IS TOPICS</h1>
        {topics.map(topic => (
          <div key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>
              <h4>{topic.slug}</h4>
            </Link>
            <h6>{topic.description}</h6>
          </div>
        ))}
        <br />
        <PostTopic />
      </div>
    );
  }

  componentDidMount = () => {
    api.getTopics().then(({ data }) => this.setState({ topics: data.topics }));
  };
}

export default Topics;
