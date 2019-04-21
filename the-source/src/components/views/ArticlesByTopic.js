import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../api/api";
import ArticleCard from "../cards/ArticleCard";
import PostArticle from "../cards/PostArticle";
import Error from "../views/Error";
import Loading from "../cards/Loading";
import "../style/Articles.css";
import menuicon from "../icons/menu.png";
import sorticon from "../icons/sort.png";
import commenticon from "../icons/comment.png";
import upvoteicon from "../icons/like.png";
import timeicon from "../icons/calendar.png";

class ArticlesByTopic extends Component {
  state = {
    isLoading: true,
    topics: [],
    articles: [],
    query: "",
    createdDesc: true,
    commentsDesc: false,
    votesDesc: false,
    isError: ""
  };

  render() {
    const { isError, isLoading, topics, articles } = this.state;
    const { topic, user } = this.props;
    const deletedArticle = this.props.location.state
      ? this.props.location.state.deletedArticle
      : "";

    if (isError)
      return <Error errorCode={isError.status} errorMsg={isError.msg} />;

    if (isLoading) return <Loading />;

    return (
      <div>
        {deletedArticle && (
          <div className="main-section-head">
            <div className="section-main">
              <div className="main-alert-home">
                <div className="main-alert-head">
                  <h4 className="section-alert-top responsive-font">{`thank you ${user}`}</h4>
                  <h4 className="section-alert-bottom responsive-font">{`${deletedArticle
                    .slice(0, 30)
                    .trim() + "..."} has been deleted`}</h4>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="main-home">
          <div className="main-section-head">
            <h2 className="section-title responsive-font">new article</h2>
          </div>
          <div className="main-section-head">
            <div className="section-main">
              <PostArticle user={user} topic={topic} />
            </div>
          </div>
          <div className="main-section-head">
            <h2 className="section-title responsive-font">{topic}</h2>

            <div className="section-menu dropdown">
              <p className="dropbtn">
                <img
                  className="responsive-icon"
                  src={menuicon}
                  alt="menu"
                  width="28px"
                  height="28px"
                />
              </p>
              <div className="dropdown-content">
                <Link to="/articles">
                  <h4>all</h4>
                </Link>
                {topics.map(topic => (
                  <Link key={topic.slug} to={`/topics/${topic.slug}/articles`}>
                    <h4>{topic.slug}</h4>
                  </Link>
                ))}
              </div>
            </div>
            <div className="section-sort">
              <div
                className="sort-button"
                onClick={this.sortByCreated}
                title="sort by date created"
              >
                <img
                  className="responsive-icon-small"
                  src={sorticon}
                  alt="sort icon"
                  width="22px"
                  height="22px"
                />
                <span> </span>
                <img
                  className="responsive-icon-small"
                  src={timeicon}
                  alt="created at icon"
                  width="22px"
                  height="22px"
                />
              </div>
              <div
                className="sort-button"
                onClick={this.sortByComments}
                title="sort by comment count"
              >
                <img
                  className="responsive-icon-small"
                  src={sorticon}
                  alt="sort icon"
                  width="22px"
                  height="22px"
                />
                <span> </span>
                <img
                  className="responsive-icon-small"
                  src={commenticon}
                  alt="comments icon"
                  width="22px"
                  height="22px"
                />
              </div>
              <div
                className="sort-button"
                onClick={this.sortByVotes}
                title="sort by vote count"
              >
                <img
                  className="responsive-icon-small"
                  src={sorticon}
                  alt="sort icon"
                  width="22px"
                  height="22px"
                />
                <span> </span>
                <img
                  className="responsive-icon-small"
                  src={upvoteicon}
                  alt="votes icon"
                  width="22px"
                  height="22px"
                />
              </div>
            </div>
          </div>

          <div className="main-section-head">
            <div className="section-main">
              {articles.map(article => (
                <div key={article.article_id}>
                  <ArticleCard articles={article} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidUpdate = (prevProps, prevState) => {
    const changeProps = this.props.topic !== prevProps.topic;
    const changeState = this.state.query !== prevState.query;
    if (changeProps || changeState) {
      this.fetchArticles();
    }
  };

  componentDidMount = () => {
    this.fetchTopics();
    this.fetchArticles();
    this.setState({ isLoading: false });
  };

  sortByCreated = () => {
    const { createdDesc } = this.state;
    if (createdDesc) {
      const query = "sort_by=created_at&order=ASC";
      this.setState({ query, createdDesc: false });
    } else {
      const query = "";
      this.setState({ query, createdDesc: true });
    }
  };

  sortByComments = () => {
    const { commentsDesc } = this.state;
    if (commentsDesc) {
      const query = "sort_by=comment_count&order=ASC";
      this.setState({ query, commentsDesc: false });
    } else {
      const query = "sort_by=comment_count&order=DESC";
      this.setState({ query, commentsDesc: true });
    }
  };

  sortByVotes = () => {
    const { votesDesc } = this.state;
    if (votesDesc) {
      const query = "sort_by=votes&order=ASC";
      this.setState({ query, votesDesc: false });
    } else {
      const query = "sort_by=votes&order=DESC";
      this.setState({ query, votesDesc: true });
    }
  };

  fetchTopics = () => {
    api
      .getTopics()
      .then(({ data }) => this.setState({ topics: data.topics }))
      .catch(error => this.setState({ isError: error.response.data }));
  };

  fetchArticles = () => {
    const { topic, username } = this.props;
    const { query } = this.state;
    api
      .getArticles(topic, username, query)
      .then(({ data }) => this.setState({ articles: data.articles }))
      .catch(error => this.setState({ isError: error.response.data }));
  };
}

export default ArticlesByTopic;
