import React from "react";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteUserPost } from "../../features/userPosts/postSlice";

function Post({ post, i }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleDelete = () => {
    console.log(post._id);
    dispatch(deleteUserPost(post._id));
    window.location.reload();
    console.log("delete initialized");
  };

  return (
    <div className="Post" id={"post" + i}>
      <div className="post-top">
        <h2 className="card-username">{post.username}</h2>
        {/* <h2>{postID}</h2> */}
        {user && post.username === user.username ? (
          <button className="delete" type="button" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        ) : null}
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
