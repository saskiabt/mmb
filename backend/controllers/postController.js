// const Post = require("../schemas/Post");
const asyncHandler = require("express-async-handler");
const Post = require("../schemas/Post");

const getPost = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ posts });
  } catch (err) {
    if (err) console.log(err.message);
    process.exit();
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
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(400);
      throw new Error("Post not found");
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

    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ message: `successfully deleted post: ${deletedPost}` });
  } catch (err) {
    if (err) console.log(`Error in updatePost: ${err}`);
    process.exit();
  }
});

module.exports = {
  getPost,
  createPost,
  updatePost,
  deletePost,
};
