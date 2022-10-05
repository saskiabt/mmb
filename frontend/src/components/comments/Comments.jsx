import React, { useEffect, useState } from "react";
import { fetchPost, deletePost } from "../../api/posts";
import Post from "../post/Post";
import "./Comments.css";

function Comments() {
  const [posts, setPosts] = useState([]);

  const handleDelete = async (id) => {
    await deletePost(id);
    const newPosts = await fetchPost();
    console.log(newPosts.posts);
    setPosts(newPosts.posts);
  };

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
        return (
          <Post
            key={post._id}
            post={post}
            i={i}
            postID={post._id}
            setPosts={setPosts}
            handleDelete={handleDelete}
          ></Post>
        );
      })}
    </ul>
  );
}

export default Comments;
