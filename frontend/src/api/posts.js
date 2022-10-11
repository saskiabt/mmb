import axios from "axios";
const API_URL = "/api/posts/";

const fetchAllPosts = async () => {
  try {
    const response = await fetch("/api/feed");
    const result = await response.json();
    console.log(result);
    return result;
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
      { username: username, comment: comment },
      config
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const deletePost = async (id) => {
  try {
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    });

    const data = await response.json();
    console.log(data);
  } catch (err) {
    if (err) console.log(err);
  }
};

export { fetchAllPosts, addPost, deletePost, fetchPosts };
