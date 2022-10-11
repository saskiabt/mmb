import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../features/allPosts/AllPostSlice";
import Post from "../post/Post";
import { v4 as uuidv4 } from "uuid";
import "../myPosts/Comments.css";
import AllPosts from "../AllPosts/AllPosts";

function LandingPage() {
  const dispatch = useDispatch();
  const { allPosts, isLoading, isError, message } = useSelector(
    (state) => state.allPosts
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getAllPosts());
  }, [dispatch, isError, message]);

  return (
    <div className="LandingPage MyPosts">
      <div className="heading">
        <h1>Feed</h1>
      </div>
      {allPosts.length > 0 ? (
        <AllPosts></AllPosts>
      ) : (
        <div>
          <p>Please login to add posts.</p>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
