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
import "../user-dashboard/style/dashboard.css";

import "../heading/heading.css";
import _ from "lodash";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.post
  );

  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (comment) {
      dispatch(createPost(comment));
      setComment("");
      document.getElementById("comment-input").value = "";
      window.location.reload();
    } else {
      document.getElementById("comment-input").placeholder =
        "Please enter a comment";
    }
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
  }, [isError, user, navigate, dispatch, message]);

  if (isLoading) return <Spinner></Spinner>;
  return (
    <div className="Dashboard">
      {" "}
      <div className="heading">
        <h1>Welcome, {_.capitalize(user.username)}</h1>
        {/* <h3>MY POSTS</h3> */}
      </div>
      <div className="Create-Post">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-inputs">
            <label className="comments">
              <input
                type="text"
                placeholder="Enter comment"
                onChange={handleChange}
                name="comment"
                id="comment-input"
              ></input>
            </label>
          </div>
          <div className="form-buttons">
            <button type="submit">Add Comment</button>
          </div>
        </form>
      </div>
      {posts.length > 0 ? (
        <MyPosts></MyPosts>
      ) : (
        <div className="no-posts">
          {" "}
          <h3>You have not posted anything.</h3>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
