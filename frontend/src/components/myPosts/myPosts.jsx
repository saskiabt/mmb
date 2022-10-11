import React from "react";
import { useSelector } from "react-redux";
import Post from "../post/Post";
import { v4 as uuidv4 } from "uuid";
import "./Comments.css";

function MyPosts() {
  const { posts } = useSelector((state) => state.post);

  return (
    <div className="MyPosts">
      <h3>My Posts</h3>
      <ul>
        {posts &&
          posts.map((post) => {
            return <Post key={uuidv4()} post={post} postID={post._id}></Post>;
          })}
      </ul>
    </div>
  );
}

export default MyPosts;
