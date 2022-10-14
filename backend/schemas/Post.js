const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
      // lowercase: true,
    },
    username: {
      type: String,
      required: true,
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
    likeCount: {
      type: Number,
      default: 0,
      required: true,
    },
    likedBy: {
      type: Array,
      default: [],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
