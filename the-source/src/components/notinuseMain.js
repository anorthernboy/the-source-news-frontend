import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

class Main extends Component {
  render() {
    return (
      <div>
        <ArticleCard />
        <div className="main">
          <div className="first">
            <ArticleCard />
          </div>
          <div className="second">
            <ArticleCard />
          </div>
          <div className="third">
            <ArticleCard />
          </div>
          <div className="fourth">
            <ArticleCard />
          </div>
          <div className="fifth">
            <ArticleCard />
          </div>
          <div className="sixth">
            <ArticleCard />
          </div>
          <div className="seventh">
            <ArticleCard />
          </div>
          <div className="eighth">
            <ArticleCard />
          </div>
          <div className="ninth">
            <ArticleCard />
          </div>
          <div className="tenth">
            <ArticleCard />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
