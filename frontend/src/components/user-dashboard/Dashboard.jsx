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
import Form from "../form/Form";
import "../user-dashboard/style/dashboard.css";
import _ from "lodash";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { posts, isLoading, isError, message } = useSelector(
    (state) => state.post
  );

  const [commentData, setCommentData] = useState({
    username: "",
    comment: "",
  });

  const [isHidden, setIsHidden] = useState(true);

  const handleChange = (event) => {
    setCommentData({
      ...commentData,
      comment: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCommentData({
      ...commentData,
      username: user.username,
    });
    console.log(commentData);

    if (commentData.comment && commentData.username !== "") {
      dispatch(createPost(commentData));
      setCommentData({
        ...commentData,
        comment: "",
        username: "",
      });
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
      </div>
      <Form handleChange={handleChange} handleSubmit={handleSubmit}></Form>
      <MyPosts></MyPosts>
    </div>
  );
}

export default Dashboard;
