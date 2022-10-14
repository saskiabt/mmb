import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../features/userPosts/postSlice";

function LikeButton({ post }) {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [isLiked, setIsLiked] = useState(false);
  const [clicked, setClicked] = useState(false);

  const addLike = () => {
    dispatch(like(post._id));
    toggleLiked();
  };

  const toggleLiked = () => {
    isLiked ? setIsLiked(false) : setIsLiked(true);
  };

  return (
    <button className="like-btn" onClick={addLike}>
      {isLiked ? (
        <FontAwesomeIcon icon={faHeart} className="liked" />
      ) : (
        <FontAwesomeIcon icon={faHeart} />
      )}{" "}
      {post.likedBy.length}
    </button>
  );
}

export default LikeButton;
