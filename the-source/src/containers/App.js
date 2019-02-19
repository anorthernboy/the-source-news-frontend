import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "../components/Header";
import Scroll from "../components/Scroll";
import Home from "../components/Home";
import Nav from "../components/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Scroll>
          <Router>
            <Home path="/" />
          </Router>
        </Scroll>
        <Nav />
      </div>
    );
  }
}

export default App;

// {
/* <TopNav />
  <Scroll>
    <Router>
      <Home path="/" />
      <Articles path="/articles" />
      <Topics path="/topics" />
      <Users path="/users" />
      <ArticlesByTopic path="/topics/:topic" />
      <Article path="/articles/:article_id" />
    </Router>
  </Scroll>
  <BottomNav /> */
// }
