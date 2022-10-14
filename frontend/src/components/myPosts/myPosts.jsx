import React from "react";
import { useSelector } from "react-redux";
import Post from "../post/Post";
import "../landing-page/landingPage.css";
function MyPosts() {
  const { posts } = useSelector((state) => state.post);

  return (
    <div className="MyPosts">
      {" "}
      <ul>
        {posts &&
          posts
            .slice(0)
            .reverse()
            .map((post) => {
              return <Post key={post._id} post={post} postID={post._id}></Post>;
            })}
      </ul>
    </div>
  );
}

export default MyPosts;
