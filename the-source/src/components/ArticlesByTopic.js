import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api/api";
import FetchArticles from "./FetchArticles";
import "./Articles.css";
import menuicon from "./menu.png";

class ArticlesByTopic extends Component {
  state = {
    topics: []
  };

  render() {
    const { topic } = this.props;
    const { topics } = this.state;
    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">{topic}</h2>

          <div className="section-menu dropdown">
            <p className="dropbtn">
              <img src={menuicon} alt="menu" width="28px" height="28px" />
            </p>
            <div className="dropdown-content">
              <Link to="/articles">
                <h4>all</h4>
              </Link>
              {topics.map(topic => (
                <Link key={topic.slug} to={`/topics/${topic.slug}/articles`}>
                  <h4>{topic.slug}</h4>
                </Link>
              ))}
            </div>
          </div>

          <br />
          <div className="section-main">
            <FetchArticles topic={topic} query={"limit=100000"} />
          </div>
          <br />
        </div>
      </div>
    );
  }

  componentDidUpdate = prevProps => {
    console.log(prevProps.topic, this.props.topic);
    if (prevProps.topic !== this.props.topic) {
      this.setState();
    } else {
    }
  };

  componentDidMount = () => {
    api.getTopics().then(({ data }) => this.setState({ topics: data.topics }));
  };
}

export default ArticlesByTopic;
