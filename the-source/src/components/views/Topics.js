import React, { Component } from "react";
import * as api from "../../api/api";
import TopicCard from "../cards/TopicCard";
import PostTopic from "../PostTopic";
import loadingicon from "../icons/loading.png";

class Topics extends Component {
  state = {
    isLoading: true,
    topics: []
  };

  render() {
    const { isLoading, topics } = this.state;
    const { addedTopic } = this.props.location.state;

    if (isLoading)
      return (
        <div className="main-alert-home">
          <div className="main-alert-head">
            <h2 className="section-loading">
              <img
                src={loadingicon}
                alt="loading icon"
                width="40px"
                height="40px"
              />
            </h2>
          </div>
        </div>
      );

    return (
      <div>
        {addedTopic && (
          <div className="main-alert-home">
            <div className="main-alert-head">
              <h4 className="section-alert-top">{`${addedTopic} has been added to the source`}</h4>
              <h4 className="section-alert-bottom">{`you can now add articles to ${addedTopic}`}</h4>
            </div>
          </div>
        )}

        <div className="main-home">
          <div className="main-section-head">
            <h2 className="section-title">new topic</h2>
          </div>
          <div className="main-section-head">
            <div className="section-main">
              <PostTopic />
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
}

export default Topics;
