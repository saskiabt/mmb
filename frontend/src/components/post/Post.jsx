import React from "react";
import "./Post.css";

function Post({ post, i }) {
  const formatDate = () => {
    const arr = post.createdAt.split("T");

    const date = arr[0].split("-");
    const newDate = `${date[1]}/${date[2]}/${date[0]}`;

    const time = arr[1].split(":");

    const newTime = `${time[0]}:${time[1]} CST`;
    const formatted = `${newDate} - ${newTime}`;

    return formatted;
  };
  return (
    <div className="post" id={"post" + i}>
      <div className="post-top">
        <h2>{post.username}</h2>
        <div className="date">{formatDate(post.createdAt)}</div>
      </div>
      <p>{post.comment}</p>
    </div>
  );
}

export default Post;
