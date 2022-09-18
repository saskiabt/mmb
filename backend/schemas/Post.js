const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    username: String,
    date: {
      rawDate: Date,
      postDate: String,
    },
    comment: String,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
