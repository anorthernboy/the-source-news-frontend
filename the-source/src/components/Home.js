import React, { Component } from "react";
import FetchArticles from "./FetchArticles";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title">most recent</h2>
          <img
            className="section-menu"
            src="menu.png"
            alt="menu"
            width="28px"
            height="28px"
          />
          <br />
          <div className="section-main">
            <FetchArticles />
          </div>
          <br />
        </div>
        <div className="main-section-head">
          <h2 className="section-title">most commented</h2>
          <img
            className="section-menu"
            src="menu.png"
            alt="menu"
            width="28px"
            height="28px"
          />
          <br />
          <div className="section-main">
            <FetchArticles query={"sort_by=comment_count&order=DESC"} />
          </div>
          <br />
        </div>
        <div className="main-section-head">
          <h2 className="section-title">most votes</h2>
          <img
            className="section-menu"
            src="menu.png"
            alt="menu"
            width="28px"
            height="28px"
          />
          <br />
          <div className="section-main">
            <FetchArticles query={"sort_by=votes&order=DESC"} />
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Home;
