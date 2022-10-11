import React from "react";
import { useSelector } from "react-redux";
import Post from "../post/Post";
import { v4 as uuidv4 } from "uuid";
import "../landing-page/landingPage.css";
function MyPosts() {
  const { posts } = useSelector((state) => state.post);

  return (
    <div className="MyPosts">
      {" "}
      <ul>
        {posts &&
          posts.map((post) => {
            return <Post key={uuidv4()} post={post} postID={post._id}></Post>;
          })}
      </ul>
    </div>
  );
}

export default MyPosts;
