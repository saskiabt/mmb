import React from "react";
import "./Post.css";

function Post({ post, i }) {
  const formatDate = () => {
    const arr = post.createdAt.split("T");

    const date = arr[0].split("-");
    const newDate = `${date[1]}/${date[2]}/${date[0]}`;
    console.log(newDate);

    const time = arr[1].split(":");

    const newTime = `${time[0]}:${time[1]}`;
    console.log(newTime);
    const formatted = `${newDate} - ${newTime}`;

    return formatted;
  };
  return (
    <div className="post" key={post._id} id={"post" + i}>
      <div className="post-top">
        <h2>{post.username}</h2>
        <div>{formatDate(post.createdAt)}</div>
      </div>
      <p>{post.comment}</p>
    </div>
  );
}

export default Post;
