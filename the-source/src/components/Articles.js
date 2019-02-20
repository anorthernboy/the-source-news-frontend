import React, { Component } from "react";
import * as api from "../api/api";
import FetchArticles from "./FetchArticles";
import "./Articles.css";

class Articles extends Component {
  state = {
    topics: []
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">articles</h2>

          <div className="section-menu dropdown">
            <a className="dropbtn" href="#">
              <img src="menu.png" alt="menu" width="28px" height="28px" />
            </a>
            <div className="dropdown-content">
              {topics.map(topic => (
                <a key={topic.slug} href={`/topics/${topic.slug}/articles`}>
                  <h4>{topic.slug}</h4>
                </a>
              ))}
            </div>
          </div>

          <br />
          <div className="section-main">
            <FetchArticles query={"limit=100000"} />
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

export default Articles;