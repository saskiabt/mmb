import axios from "axios";
const API_URL = "/api/posts/";

const fetchPost = async () => {
  try {
    const response = await fetch("/api/posts");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const fetchUserPosts = async (id) => {
  try {
    const response = await fetch("/api/userPosts/?" + id);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

const addPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    console.log(postData);
    const response = await axios.post(
      API_URL,
      { username: postData.username, comment: postData.comment },
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

export { fetchPost, addPost, deletePost, fetchUserPosts };
