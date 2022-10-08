import React from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  formatDate,
  formatTime,
} from "../../helper-functions/date-time/format-dates";

function Post({ post, i, postID, handleDelete }) {
  return (
    <div className="post" id={"post" + i}>
      <div className="post-top">
        <h2 className="username">{post.username}</h2>
        <div className="delete-container">
          <button
            id="delete"
            type="button"
            onClick={() => handleDelete(postID)}
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </div>
      </div>

      <div className="post-body">
        <p className="comment">{post.comment}</p>
        <div className="date">
          <p>{formatTime(post.createdAt)}</p>
          <p>{formatDate(post.createdAt)}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
