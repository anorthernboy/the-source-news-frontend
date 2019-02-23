import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../api/api";
import ArticleView from "../views/ArticleView";
import CommentCard from "../cards/CommentCard";
import PostComment from "../PostComment";
import loadingicon from "../icons/loading.png";

class Article extends Component {
  state = {
    isLoading: true,
    article: {},
    comments: []
  };

  render() {
    const { isLoading, article, comments } = this.state;
    const { user } = this.props;

    if (isLoading)
      return (
        <div className="main-alert-home">
          <div className="main-alert-head">
            <h2 className="section-loading">
              <img
                src={loadingicon}
                alt="loading icon"
                width="40px"
                height="40px"
              />
            </h2>
          </div>
        </div>
      );

    return (
      <div className="main-home">
        <div className="main-section-head">
          <Link
            to={`/topics/${article.topic}/articles`}
            className="section-title"
          >
            <h2>{article.topic}</h2>
          </Link>
        </div>

        <div className="main-section-head">
          <div className="section-main">
            <ArticleView user={user} articles={article} />
          </div>
          <br />
        </div>

        <div className="main-section-head">
          <h2 className="section-title">add comment</h2>
        </div>

        <div className="main-section-head">
          <div className="section-main">
            <PostComment
              user={user}
              article_id={article.article_id}
              addToComments={this.addToComments}
            />
          </div>
          <br />
        </div>

        {comments.length !== 0 && (
          <div>
            <div className="main-section-head">
              <h2 className="section-title">comments</h2>
            </div>

            <div className="main-section-head">
              <div className="section-main">
                {comments.map(comment => (
                  <div key={comment.comment_id}>
                    <CommentCard
                      user={user}
                      comments={comment}
                      article_id={article.article_id}
                    />
                  </div>
                ))}
              </div>
              <br />
            </div>
          </div>
        )}
      </div>
    );
  }

  componentDidMount = () => {
    this.fetchArticle();
    this.fetchComments();
    this.setState({ isLoading: false });
  };

  fetchArticle = () => {
    const { article_id } = this.props;
    api.getArticle(article_id).then(({ data }) =>
      this.setState({
        article: data
      })
    );
  };

  fetchComments = () => {
    const { article_id } = this.props;
    api.getComments(article_id).then(({ data }) =>
      this.setState({
        comments: data.comments
      })
    );
  };

  addToComments = comment => {
    const { comments } = this.state;
    delete Object.assign(comment, { author: comment["username"] })["username"];
    comments.unshift(comment);
    this.setState({ comments });
  };
}

export default Article;
