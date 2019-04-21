import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../../api/api";
import ArticleView from "../cards/ArticleView";
import CommentCard from "../cards/CommentCard";
import PostComment from "../cards/PostComment";
import Error from "../views/Error";
import Loading from "../cards/Loading";

class Article extends Component {
  state = {
    isLoading: true,
    article: {},
    comments: [],
    commentAdded: false,
    isError: ""
  };

  render() {
    const { isError, isLoading, article, comments, commentAdded } = this.state;
    const { user } = this.props;

    if (isError)
      return <Error errorCode={isError.status} errorMsg={isError.msg} />;

    if (isLoading) return <Loading />;

    return (
      <div>
        {commentAdded && (
          <div className="main-section-head">
            <div className="section-main">
              <div className="main-alert-home">
                <div className="main-alert-head">
                  <h4 className="section-alert-top responsive-font">{`thank you ${user}`}</h4>
                  <h4 className="section-alert-bottom responsive-font">{`your comment has been deleted`}</h4>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="main-home">
          <div className="main-section-head">
            <Link
              to={`/topics/${article.topic}/articles`}
              className="section-title responsive-font"
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
            <h2 className="section-title responsive-font">add comment</h2>
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
                <h2 className="section-title responsive-font">comments</h2>
              </div>

              <div className="main-section-head">
                <div className="section-main">
                  {comments.map(comment => (
                    <div key={comment.comment_id}>
                      <CommentCard
                        user={user}
                        comments={comment}
                        article_id={article.article_id}
                        removeFromComments={this.removeFromComments}
                      />
                    </div>
                  ))}
                </div>
                <br />
              </div>
            </div>
          )}
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
    api
      .getArticle(article_id)
      .then(({ data }) =>
        this.setState({
          article: data
        })
      )
      .catch(error => this.setState({ isError: error.response.data }));
  };

  fetchComments = () => {
    const { article_id } = this.props;
    api
      .getComments(article_id)
      .then(({ data }) =>
        this.setState({
          comments: data.comments
        })
      )
      .catch(error => this.setState({ isError: error.response.data }));
  };

  addToComments = comment => {
    const { comments } = this.state;
    delete Object.assign(comment, { author: comment["username"] })["username"];
    comments.unshift(comment);
    this.setState({ comments });
  };

  removeFromComments = comment_id => {
    const { comments } = this.state;
    const newComments = comments.filter(
      comment => comment.comment_id !== comment_id
    );
    this.setState({ comments: newComments, commentAdded: true });
  };
}

export default Article;
