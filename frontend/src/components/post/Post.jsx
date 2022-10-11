import React from "react";
import "./Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Post({ post, i, postID, handleDelete }) {
  return (
    <div className="Post" id={"post" + i}>
      <div className="post-top">
        <h2 className="card-username">{post.username}</h2>
        {/* <div className="delete-container">
          <button
            id="delete"
            type="button"
            onClick={() => handleDelete(postID)}
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        </div> */}
      </div>
      <div className="post-bottom">
        <p className="card-comment">{post.comment}</p>
        <div className="date">
          <p>{new Date(post.createdAt).toLocaleDateString("en-US")}</p>
          <p>{new Date(post.createdAt).toLocaleTimeString("en-US")}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
