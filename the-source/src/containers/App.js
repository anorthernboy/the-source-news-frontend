import React, { Component } from "react";
import { Router } from "@reach/router";
import * as api from "../api/api";
import Header from "../components/Header";
import Scroll from "../components/Scroll";
import Auth from "../components/Auth";
import Home from "../components/views/Home";
import Articles from "../components/views/Articles";
import ArticlesByTopic from "../components/views/ArticlesByTopic";
import ArticlesByUser from "../components/views/ArticlesByUser";
import Article from "../components/views/Article";
import Topics from "../components/views/Topics";
import Users from "../components/views/Users";
import Nav from "../components/Nav";
import "./App.css";

class App extends Component {
  state = { user: "" };

  componentDidMount = () => {
    const username = window.localStorage.getItem("username");
    if (username) this.setState({ user: username });
  };

  componentDidUpdate = () => {
    const { user } = this.state;
    window.localStorage.setItem("username", user);
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header user={user} />
        <Scroll>
          <Auth user={user} login={this.userLogin}>
            <Router>
              <Home path="/" />
              <Articles path="/articles" />
              <ArticlesByTopic path="/topics/:topic/articles" user={user} />
              <ArticlesByUser path="/users/:username/articles" user={user} />
              <Article path="/articles/:article_id/" user={user} />
              <Topics path="/topics" user={user} />
              <Users path="/users" />
            </Router>
          </Auth>
        </Scroll>
        <Nav logout={this.userLogout} />
      </div>
    );
  }

  userLogin = username => {
    api.getUser(username).then(({ data }) => {
      this.setState({ user: data.username });
    });
  };

  userLogout = () => {
    this.setState({ user: "" });
  };
}

export default App;
