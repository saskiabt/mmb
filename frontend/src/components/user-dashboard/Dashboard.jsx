import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyPosts from "../myPosts/myPosts";
import {
  createPost,
  getPosts,
  reset,
} from "../../features/userPosts/postSlice";
import Spinner from "../spinner/Spinner";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.post
  );

  const [commentData, setCommentData] = useState({
    username: user.username,
    comment: "",
  });

  const handleChange = (event) => {
    setCommentData({
      ...commentData,
      comment: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(commentData);
    dispatch(createPost(commentData));
    setCommentData({
      ...commentData,
      comment: "",
    });
    document.getElementById("comment-input").value = "";
  };

  const handleClick = () => {
    dispatch(getPosts());

    dispatch(reset());
  };

  useEffect(() => {
    const goToLogin = () => {
      navigate("/login");
    };
    if (!user) {
      goToLogin();
    }

    if (isError) {
      console.log(message);
    }

    dispatch(getPosts());

    return () => {
      dispatch(reset());
    };
  }, [isError, user, navigate, dispatch]);

  if (isLoading) return <Spinner></Spinner>;
  return (
    <div>
      {" "}
      <div className="heading">
        <h1>Welcome {user.username}</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="post-form">
          <label className="comments">
            <input
              type="text"
              placeholder="Enter comment"
              onChange={handleChange}
              name="comment"
              id="comment-input"
            ></input>
          </label>
          <button type="submit">Add Comment</button>
        </form>
        <MyPosts></MyPosts>
      </div>
    </div>
  );
}

export default Dashboard;
