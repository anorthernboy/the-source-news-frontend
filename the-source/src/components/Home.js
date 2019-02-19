import React, { Component } from "react";
import FetchArticles from "./FetchArticles";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="main-home">
        <div className="main-section-head">
          <br />
          <h2>most recent</h2>
          <br />
          <FetchArticles />
          <br />
        </div>
        <div className="main-section-head">
          <br />
          <h2>most commented</h2>
          <br />
          <FetchArticles query={"sort_by=comment_count&order=DESC"} />
          <br />
        </div>
        <div className="main-section-head">
          <br />
          <h2>most votes</h2>
          <br />
          <FetchArticles query={"sort_by=votes&order=DESC"} />
          <br />
        </div>
      </div>
    );
  }
}

export default Home;
