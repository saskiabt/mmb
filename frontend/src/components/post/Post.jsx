import React, { useState } from "react";
import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import { deleteUserPost, like } from "../../features/userPosts/postSlice";

function Post({ post, i }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleDelete = () => {
    console.log(post._id);
    dispatch(deleteUserPost(post._id));
    window.location.reload();
    console.log("delete initialized");
  };

  const addLike = () => {
    dispatch(like(post._id));
  };

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="Post"
      id={"post" + i}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="post-top">
        <h2 className="card-username">{post.username}</h2>
        {/* <h2>{postID}</h2> */}
        {isHovering && user && post.username === user.username ? (
          <button className="delete" type="button" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
        ) : null}
      </div>
      <div className="post-bottom">
        <p className="card-comment">{post.comment}</p>
        <div>
          <div className="date">
            <p>{new Date(post.createdAt).toLocaleDateString("en-US")}</p>
            <p>{new Date(post.createdAt).toLocaleTimeString("en-US")}</p>
          </div>
          <button className="like-btn" onClick={like}>
            <FontAwesomeIcon icon={faHeart} /> {post.likeCount}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
