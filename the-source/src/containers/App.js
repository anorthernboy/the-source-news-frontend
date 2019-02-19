import React, { Component } from "react";
import "./App.css";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";
import Home from "../endpoints/Home";
import Articles from "../endpoints/Articles";
import Topics from "../endpoints/Topics";
import Users from "../endpoints/Users";
import Scroll from "../components/Scroll";
import { Router } from "@reach/router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Scroll>
          <Router>
            <Home path="/" />
            <Articles path="/articles" />
            <Topics path="/topics" />
            <Users path="/users" />
          </Router>
        </Scroll>
        <BottomNav />
      </div>
    );
  }
}

export default App;
