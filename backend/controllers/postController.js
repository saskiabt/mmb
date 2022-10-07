const asyncHandler = require("express-async-handler");
const Post = require("../schemas/Post");
const User = require("../schemas/UserSchema");

const getPost = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ posts });
  } catch (err) {
    if (err) console.log(err.message);
    process.exit();
  }
});

const getUserPosts = asyncHandler(async (req, res) => {
  const userPosts = await Post.find({ user: req.user.id });
  res.status(200).json(userPosts);
});

const createPost = asyncHandler(async (req, res) => {
  console.log(req.body.comment);
  if (!req.body.comment) {
    res.status(400);
    throw new Error(`Please add a comment`);
  }

  const newPost = await Post.create({
    user: req.user.id,
    username: req.user.name,
    comment: req.body.comment,
  });

  console.log({ newPost });

  res.status(200).json({ message: `added post: ${newPost} ` });
});

const updatePost = asyncHandler(async (req, res) => {
  console.log(req);
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(400);
      throw new Error("Post not found");
    }

    const user = await User.findById(req.user.id);

    // check to see if user exists
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }
    // Make sure post's user ID is equal to the userID of the logged in user,
    if (post.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({ message: `updated post: ${updatedPost}` });
  } catch (err) {
    if (err) console.log(`Error in updatePost: ${err}`);
    process.exit();
  }
});

const deletePost = asyncHandler(async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(400);
      throw new Error("Post not found");
    }

    const user = await User.findById(req.user.id);

    // check to see if user exists
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }
    // Make sure post's user ID is equal to the userID of the logged in user,
    if (post.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }

    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ message: `successfully deleted post: ${deletedPost}` });
  } catch (err) {
    if (err) console.log(`Error in deletePost: ${err}`);
    process.exit();
  }
});

module.exports = {
  getPost,
  createPost,
  updatePost,
  deletePost,
  getUserPosts,
};
