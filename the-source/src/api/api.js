import axios from "axios";
const request = axios.create({
  baseURL: "https://the-source-news.herokuapp.com/api"
});

export const getTopics = async () => {
  const topics = await request.get(`/topics`);
  return topics;
};

export const addTopic = async newTopic => {
  const topic = await request.post(`/topics`, newTopic);
  return topic;
};

export const getArticles = async (topic, username, query) => {
  const PATH =
    topic && query
      ? `/topics/${topic}/articles?${query}`
      : username && query
      ? `/users/${username}/articles?${query}`
      : topic
      ? `/topics/${topic}/articles`
      : username
      ? `/users/${username}/articles`
      : query
      ? `/articles?${query}`
      : `/articles`;
  const articles = await request.get(PATH);
  return articles;
};

export const addArticle = async (topic, newArticle) => {
  const article = await request.post(`/topics/${topic}/articles`, newArticle);
  return article;
};

export const getArticle = async article_id => {
  const article = await request.get(`/articles/${article_id}`);
  return article;
};

export const getComments = async article_id => {
  const comments = await request.get(`/articles/${article_id}/comments`);
  return comments;
};

export const getUsers = async () => {
  const users = await request.get(`/users`);
  return users;
};

export const addUser = async newUser => {
  const user = await request.post(`/users`, newUser);
  return user;
};

export const getUser = async username => {
  const user = await request.get(`/users/${username}`);
  return user;
};

export const commentVote = async (article_id, comment_id, inc_vote) => {
  const comment = await request.patch(
    `/articles/${article_id}/comments/${comment_id}`,
    inc_vote
  );
  return comment;
};

export const articleVote = async (article_id, inc_vote) => {
  const comment = await request.patch(`/articles/${article_id}`, inc_vote);
  return comment;
};

export const deleteArticle = async article_id => {
  const article = await request.delete(`/articles/${article_id}`);
  return article;
};

export const addComment = async (article_id, newComment) => {
  const comment = await request.post(
    `/articles/${article_id}/comments`,
    newComment
  );
  return comment;
};

export const deleteComment = async (article_id, comment_id) => {
  const comment = await request.delete(
    `/articles/${article_id}/comments/${comment_id}`
  );
  return comment;
};

export const getAllComments = async () => {
  const comments = await request.get(`/comments`);
  return comments;
};
