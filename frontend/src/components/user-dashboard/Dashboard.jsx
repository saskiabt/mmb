import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost, fetchPosts } from "../../features/userPosts/postSlice";
import { addPost } from "../../api/posts";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);

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

  useEffect(() => {
    const goToLogin = () => {
      navigate("/login");
    };
    if (!user) {
      goToLogin();
    }
  }, [navigate, dispatch, user]);

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
      </div>
    </div>
  );
}

export default Dashboard;
