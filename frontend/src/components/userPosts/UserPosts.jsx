import React, { useEffect, useState } from "react";
import { fetchUserPosts, deletePost, fetchPost } from "../../api/posts";
import Post from "../post/Post";
import { useSelector, useDispatch } from "react-redux";

function UserPosts() {
  const [posts, setPosts] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    await deletePost(id);
    const newPosts = await fetchPost();
    console.log(newPosts.posts);
    setPosts(newPosts.posts);
  };

  //   useEffect(() => {
  //     const callApi = async () => {
  //       const result = await fetchUserPosts(user.id);
  //       console.log(result);
  //     };

  //     callApi();
  //   }, []);

  return (
    <ul className="comments">
      {/* {posts.map((post, i) => {
        return (
          <Post
            key={post._id}
            post={post}
            i={i}
            postID={post._id}
            setPosts={setPosts}
            handleDelete={handleDelete}
          ></Post>
        );
      })} */}
    </ul>
  );
}

export default UserPosts;
