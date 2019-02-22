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
    const { addedComment } = this.props.location.state;

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
      <div>
        {addedComment && (
          <div className="main-alert-home">
            <div className="main-alert-head">
              <h4 className="section-alert-top">{`${addedComment.slice(
                0,
                15
              )}...`}</h4>
              <h4 className="section-alert-bottom">{`has been added`}</h4>
            </div>
          </div>
        )}

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
              <PostComment user={user} article_id={article.article_id} />
            </div>
            <br />
          </div>

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
}

export default Article;
