import React, { Component } from "react";
import * as api from "../../api/api";
import ArticleCard from "../cards/ArticleCard";
import Error from "../views/Error";
import Loading from "../cards/Loading";
import "../style/Home.css";

class Home extends Component {
  state = {
    isLoading: true,
    articles: [],
    articlesMostComments: [],
    articlesMostVotes: [],
    isError: ""
  };

  render() {
    const {
      isError,
      isLoading,
      articles,
      articlesMostComments,
      articlesMostVotes
    } = this.state;

    if (isError)
      return <Error errorCode={isError.status} errorMsg={isError.msg} />;

    if (isLoading) return <Loading />;

    return (
      <div className="main-home">
        <div className="main-section-head">
          <h2 className="section-title responsive-font">#recent</h2>
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
        <div className="main-section-head">
          <h2 className="section-title responsive-font">#comments</h2>
        </div>
        <div className="main-section-head">
          <div className="section-main">
            {articlesMostComments.map(article => (
              <div key={article.article_id}>
                <ArticleCard articles={article} />
              </div>
            ))}
          </div>
        </div>
        <div className="main-section-head">
          <h2 className="section-title responsive-font">#votes</h2>
        </div>
        <div className="main-section-head">
          <div className="section-main">
            {articlesMostVotes.map(article => (
              <div key={article.article_id}>
                <ArticleCard articles={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = props => {
    this.fetchArticles();
    this.fetchArticlesMostComments();
    this.fetchArticlesMostVotes();
    this.setState({ isLoading: false });
  };

  fetchArticles = () => {
    const { topic, username, query } = this.props;
    api
      .getArticles(topic, username, query)
      .then(({ data }) => this.setState({ articles: data.articles }))
      .catch(error => this.setState({ isError: error.response.data }));
  };

  fetchArticlesMostComments = () => {
    const { topic, username } = this.props;
    const query = "sort_by=comment_count&order=DESC";
    api
      .getArticles(topic, username, query)
      .then(({ data }) =>
        this.setState({ articlesMostComments: data.articles })
      )
      .catch(error => this.setState({ isError: error.response.data }));
  };

  fetchArticlesMostVotes = () => {
    const { topic, username } = this.props;
    const query = "sort_by=votes&order=DESC";
    api
      .getArticles(topic, username, query)
      .then(({ data }) => this.setState({ articlesMostVotes: data.articles }))
      .catch(error => this.setState({ isError: error.response.data }));
  };
}

export default Home;
