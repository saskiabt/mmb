// const Post = require("../schemas/Post");
const asyncHandler = require("express-async-handler");
const Post = require("../schemas/Post");

const getPost = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ posts });
  } catch (err) {
    if (err) console.log(err.message);
  }
});

const createPost = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.comment || !req.body.username) {
    res.status(400);
    throw new Error(`Please add a comment`);
  }

  const newPost = await Post.create({
    username: req.body.username,
    comment: req.body.comment,
  });

  console.log({ newPost });

  res.status(200).json({ message: `added post: ${newPost} ` });
});

const updatePost = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({ message: `updated post: ${req.params.id}` });
  } catch (err) {
    if (err) console.log(`Error in updatePost: ${err}`);
  }
});

const deletePost = asyncHandler(async (req, res) => {
  try {
    res.status(200).json({ message: `updated post: ${req.params.id}` });
  } catch (err) {
    if (err) console.log("Error in updatePost");
  }
  res.status(200).json({ message: `deletex post: ${req.params.id}` });
});

module.exports = {
  getPost,
  createPost,
  updatePost,
  deletePost,
};
