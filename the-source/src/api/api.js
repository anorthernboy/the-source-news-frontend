import axios from "axios";
const BASE_URL = "https://the-source-news.herokuapp.com/api";

export const getTopics = async () => {
  const topics = await axios.get(`${BASE_URL}/topics`);
  return topics;
};

export const addTopic = async newTopic => {
  const topic = await axios.post(`${BASE_URL}/topics`, newTopic);
  return topic;
};

export const getArticles = async (topic, username, query) => {
  const URL =
    topic && query
      ? `${BASE_URL}/topics/${topic}/articles?${query}`
      : username && query
      ? `${BASE_URL}/users/${username}/articles?${query}`
      : topic
      ? `${BASE_URL}/topics/${topic}/articles`
      : username
      ? `${BASE_URL}/users/${username}/articles`
      : query
      ? `${BASE_URL}/articles?${query}`
      : `${BASE_URL}/articles`;
  const articles = await axios.get(URL);
  return articles;
};

export const addArticle = async (topic, newArticle) => {
  const article = await axios.post(
    `${BASE_URL}/topics/${topic}/articles`,
    newArticle
  );
  return article;
};

export const getArticle = async article_id => {
  const article = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return article;
};

export const getComments = async article_id => {
  const comments = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return comments;
};

export const getUsers = async () => {
  const users = await axios.get(`${BASE_URL}/users`);
  return users;
};

export const addUser = async newUser => {
  const user = await axios.post(`${BASE_URL}/users`, newUser);
  return user;
};

export const getUser = async username => {
  const user = await axios.get(`${BASE_URL}/users/${username}`);
  return user;
};

export const commentVote = async (article_id, comment_id, inc_vote) => {
  const comment = await axios.patch(
    `${BASE_URL}/articles/${article_id}/comments/${comment_id}`,
    inc_vote
  );
  return comment;
};

export const articleVote = async (article_id, inc_vote) => {
  const comment = await axios.patch(
    `${BASE_URL}/articles/${article_id}`,
    inc_vote
  );
  return comment;
};

export const deleteArticle = async article_id => {
  const article = await axios.delete(`${BASE_URL}/articles/${article_id}`);
  return article;
};

export const addComment = async (article_id, newComment) => {
  const comment = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    newComment
  );
  return comment;
};

export const deleteComment = async (article_id, comment_id) => {
  const comment = await axios.delete(
    `${BASE_URL}/articles/${article_id}/comments/${comment_id}`
  );
  return comment;
};

export const getAllComments = async () => {
  const comments = await axios.get(`${BASE_URL}/comments`);
  return comments;
};
