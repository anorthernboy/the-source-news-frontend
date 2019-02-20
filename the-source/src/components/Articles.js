import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api/api";
import FetchArticles from "./FetchArticles";
import "./Articles.css";
import menuicon from "./menu.png";

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
            <p className="dropbtn">
              <img src={menuicon} alt="menu" width="28px" height="28px" />
            </p>
            <div className="dropdown-content">
              {topics.map(topic => (
                <Link key={topic.slug} to={`/topics/${topic.slug}/articles`}>
                  <h4>{topic.slug}</h4>
                </Link>
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
