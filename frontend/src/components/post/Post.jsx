import React from "react";
import "./Post.css";

function Post({ post, i }) {
  return (
    <div className="post" key={post._id} id={"post" + i}>
      <h2>{post.username}</h2>
      <p>{post.comment}</p>
    </div>
  );
}

export default Post;
