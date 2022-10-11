import React from "react";
import { useSelector } from "react-redux";
import Post from "../post/Post";
import { v4 as uuidv4 } from "uuid";
import "../myPosts/Comments.css";
import "../landing-page/landingPage.css";

function AllPosts() {
  const { allPosts, isLoading, isError, message } = useSelector(
    (state) => state.allPosts
  );
  return (
    <div className="AllPosts">
      {allPosts &&
        allPosts.map((post, i) => {
          return <Post key={uuidv4()} post={post}></Post>;
        })}
    </div>
  );
}

export default AllPosts;
