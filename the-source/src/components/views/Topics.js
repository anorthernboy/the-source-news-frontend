import React, { Component } from "react";
import * as api from "../../api/api";
import TopicCard from "../cards/TopicCard";
import PostTopic from "../cards/PostTopic";
import Error from "../views/Error";
import Loading from "../cards/Loading";

class Topics extends Component {
  state = {
    isLoading: true,
    topics: [],
    isError: ""
  };

  render() {
    const { isError, isLoading, topics } = this.state;

    if (isError)
      return <Error errorCode={isError.status} errorMsg={isError.msg} />;

    if (isLoading) return <Loading />;

    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title responsive-font">new topic</h2>
        </div>
        <div className="main-section-head">
          <div className="section-main">
            <PostTopic />
          </div>
        </div>
        <div className="main-section-head">
          <h2 className="section-title responsive-font">topics</h2>
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
    this.fetchTopics();
    this.setState({ isLoading: false });
  };

  fetchTopics = () => {
    api
      .getTopics()
      .then(({ data }) => this.setState({ topics: data.topics }))
      .catch(error => this.setState({ isError: error.response.data }));
  };
}

export default Topics;
