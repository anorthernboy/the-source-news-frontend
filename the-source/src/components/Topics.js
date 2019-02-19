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

          <div className="section-menu dropdown">
            <a className="dropbtn" href="#">
              <img src="menu.png" alt="menu" width="28px" height="28px" />
            </a>
            <div className="dropdown-content">
              <a href="/articles">
                <h4>all articles</h4>
              </a>
              {topics.map(topic => (
                <a key={topic.slug} href={`/topics/${topic.slug}/articles`}>
                  <h4>{topic.slug}</h4>
                </a>
              ))}
            </div>
          </div>

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
