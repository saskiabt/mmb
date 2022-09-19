import { json } from "body-parser";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Post from "../post/Post";
import "./Comments.css";

function Comments({ data }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const result = await response.json();
        console.log(result);
        setPosts(result);
        return result;
      } catch (err) {
        console.log(err);
        return null;
      }
    };

    fetchPosts();
    console.log(posts);
  }, []);

  const addPost = async (event) => {
    if (!data.comment || !data.username) {
      event.preventDefault();
    }
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      if (err) throw new Error();
      process.abort();
    }
  };

  return (
    <ul className="comments">
      {posts.posts &&
        posts.posts.map((post, i) => {
          return <Post key={post._id} post={post} i={i}></Post>;
        })}
    </ul>
  );
}

export default Comments;
