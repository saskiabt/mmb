// const Post = require("../schemas/Post");

const getPost = async (req, res) => {
  try {
    res.status(200).json({ message: "get posts" });
  } catch (err) {
    if (err) console.log("Error with getPost");
  }
};

const createPost = async (req, res) => {
  try {
    console.log(req.body.comment);
    if (!req.body.comment || !req.body.userName) {
      res.status(400);
      throw new Error("Please add a comment");
    }
    res.status(200).json({ message: "added posts" });
  } catch (err) {
    if (err) console.log("Error in CreatePost");
  }

  // ASYNC
  // const newPost = await Post.create({
  //   username: "User 1",
  //   date: {
  //     rawDate: new Date(),
  //     postDate: new Date().toLocaleString,
  //   },
  //   comment: "Hello, I'm user 1",
  // });
  // console.log(newPost);
};

const updatePost = async (req, res) => {
  try {
    res.status(200).json({ message: `updated post: ${req.params.id}` });
  } catch (err) {
    if (err) console.log("Error in updatePost");
  }
};

const deletePost = async (req, res) => {
  try {
    res.status(200).json({ message: `updated post: ${req.params.id}` });
  } catch (err) {
    if (err) console.log("Error in updatePost");
  }
  res.status(200).json({ message: `deletex post: ${req.params.id}` });
};

module.exports = {
  getPost,
  createPost,
  updatePost,
  deletePost,
};
