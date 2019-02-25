import React, { Component } from "react";
import * as api from "../../api/api";
import TopicCard from "../cards/TopicCard";
import PostTopic from "../PostTopic";
import Loading from "../buttons/Loading";

class Topics extends Component {
  state = {
    isLoading: true,
    topics: []
  };

  render() {
    const { isLoading, topics } = this.state;

    if (isLoading)
      return (
        <div className="main-section-head">
          <div className="section-main">
            <div className="main-alert-home">
              <div className="main-alert-head">
                <h2 className="section-loading">
                  <Loading />
                </h2>
              </div>
            </div>
          </div>
        </div>
      );

    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">new topic</h2>
        </div>
        <div className="main-section-head">
          <div className="section-main">
            <PostTopic addToTopics={this.addToTopics} />
          </div>
        </div>
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
      </div>
    );
  }

  componentDidMount = () => {
    api
      .getTopics()
      .then(({ data }) =>
        this.setState({ topics: data.topics, isLoading: false })
      );
  };

  addToTopics = topic => {
    const { topics } = this.state;
    topics.unshift(topic);
    this.setState({ topics });
  };
}

export default Topics;
