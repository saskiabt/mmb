const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
      // lowercase: true,
    },
    createdAt: {
      type: Date,
      // immutable makes the value impossible to change after it's created
      immutable: true,
      default: () => Date.now(),
    },
    updatedAt: {
      type: Date,
      default: () => Date.now(),
    },
    comment: String,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
