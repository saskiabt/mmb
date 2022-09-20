import React, { useEffect, useState } from "react";
import { fetchPost } from "../../api/posts";
import Post from "../post/Post";
import "./Comments.css";

function Comments() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      const result = await fetchPost();
      setPosts(result.posts);
    };

    callApi();
  }, []);

  return (
    <ul className="comments">
      {posts.map((post, i) => {
        return <Post key={post._id} post={post} i={i}></Post>;
      })}
    </ul>
  );
}

export default Comments;
