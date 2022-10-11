import React from "react";
import { useSelector } from "react-redux";
import Post from "../post/Post";

function MyPosts() {
  const { posts } = useSelector((state) => state.post);

  return (
    <div>
      <ul>
        {posts &&
          posts.map((post, i) => {
            return (
              <Post key={post._id} post={post} i={i} postID={post._id}></Post>
            );
          })}
      </ul>
    </div>
  );
}

export default MyPosts;
