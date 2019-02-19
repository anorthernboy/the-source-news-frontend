import React, { Component } from "react";
import FetchArticles from "./FetchArticles";

class Articles extends Component {
  render() {
    return (
      <div className="main-home">
        <div className="main-section-head">
          <br />
          <h2>articles</h2>
          <br />
          <FetchArticles query={"limit=100000"} />
          <br />
        </div>
      </div>
    );
  }
}

export default Articles;
