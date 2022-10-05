import React from "react";
import "./Post.css";
import { deletePost } from "../../api/posts";

function Post({ post, i, postID }) {
  const formatDate = () => {
    const arr = post.createdAt.split("T");

    const date = arr[0].split("-");
    const newDate = `${date[1]}/${date[2]}/${date[0]}`;

    const time = arr[1].split(":");

    const newTime = `${time[0]}:${time[1]} CST`;
    const formatted = `${newDate} - ${newTime}`;

    return formatted;
  };

  const handleDelete = async (id) => {
    deletePost(id);
  };

  return (
    <div className="post" id={"post" + i}>
      <div className="delete-container">
        <button id="delete" type="button" onClick={() => handleDelete(postID)}>
          X
        </button>
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
