import React, { Component } from "react";
import TopArticles from "../components/TopArticles";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>THIS IS HOME</h1>
        <h2>This is most recent</h2>
        <TopArticles />
        <h2>This is most commented</h2>
        <TopArticles query={"sort_by=comment_count&order=DESC"} />
        <h2>This is most voted</h2>
        <TopArticles query={"sort_by=votes&order=DESC"} />
      </div>
    );
  }
}

export default Home;
