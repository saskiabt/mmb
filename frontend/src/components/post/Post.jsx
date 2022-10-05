import React from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";

function Post({ post, i, postID, handleDelete }) {
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
      <div className="delete-container">
        <Link
          to={"/"}
          id="delete"
          type="button"
          onClick={() => handleDelete(postID)}
        >
          X
        </Link>
      </div>
      <div className="post-top">
        <h2>{post.username}</h2>
        <div className="date">{formatDate(post.createdAt)}</div>
      </div>
      <p>{post.comment}</p>
    </div>
  );
}

export default Post;
