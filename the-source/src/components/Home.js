import React, { Component } from "react";
import Articles from "./Articles";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="main-home">
        <h2 className="main-section-head">most recent</h2>
        <Articles />
        <br />
        <h2 className="main-section-head">most commented</h2>
        <Articles query={"sort_by=comment_count&order=DESC"} />
        <br />
        <h2 className="main-section-head">most voted</h2>
        <Articles query={"sort_by=votes&order=DESC"} />
        <br />
      </div>
    );
  }
}

export default Home;
