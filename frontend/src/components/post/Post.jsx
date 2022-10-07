import React from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Post({ post, i, postID, handleDelete }) {
  const formatDate = () => {
    const arr = post.createdAt.split("T");
    const date = arr[0].split("-");
    const newDate = `${date[1]}/${date[2]}/${date[0]}`;
    return newDate;
  };

  const formatTime = () => {
    const arr = post.createdAt.split("T");
    const time = arr[1].split(":");

    const newTime = `${time[0]}:${time[1]} CST`;
    return newTime;
  };

  return (
    <div className="post" id={"post" + i}>
      <div className="delete-container">
        <button id="delete" type="button" onClick={() => handleDelete(postID)}>
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
      <div className="post-body">
        <div className="post-top">
          <h2 className="username">{post.username}</h2>
        </div>
        <div className="post-bottom">
          <p className="comment">{post.comment}</p>
          <div className="date">
            <p>{formatDate(post.createdAt)}</p>
            <p>{formatTime(post.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
