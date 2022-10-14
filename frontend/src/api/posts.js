import axios from "axios";
const API_URL = "/api/posts/";

const fetchAllPosts = async () => {
  try {
    const response = await fetch("/api/feed");
    const result = await response.json();
    console.log(result);
    return result.posts;
  } catch (err) {
    console.log(err);
  }
};

const fetchPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.get(API_URL, config);
    console.log(response.data);
    const allPosts = await response.data;
    return await allPosts;
  } catch (err) {
    console.log(err);
  }
};

const addPost = async (comment, username, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    console.log(comment);
    const response = await axios.post(
      API_URL,
      { username: username, comment: comment, likeCount: 0, likedBy: [] },
      config
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const deletePost = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.delete(API_URL + id, config);
    console.log(response.data);
    return response.data;
  } catch (err) {
    if (err) console.log(err);
  }
};

const likePost = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    console.log(id, token);
    const response = await axios.put(
      `${API_URL + id}/like`,
      { id: id },
      config
    );
    console.log(response.data);
    const newData = await axios.get(API_URL, config);
    return newData.data;
  } catch (err) {
    if (err) console.log(err);
  }
};

export { fetchAllPosts, addPost, deletePost, fetchPosts, likePost };
