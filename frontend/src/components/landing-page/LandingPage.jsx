import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPosts } from "../../features/allPosts/AllPostSlice";
import Post from "../post/Post";
import { v4 as uuidv4 } from "uuid";
import "../myPosts/Comments.css";

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
      <div className="allPosts"></div>
      <ul>
        {allPosts &&
          allPosts.map((post) => {
            return <Post key={uuidv4()} post={post} postID={post._id}></Post>;
          })}
      </ul>
    </div>
  );
}

export default LandingPage;
