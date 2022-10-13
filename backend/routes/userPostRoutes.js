const express = require("express");

const router = express.Router();

const {
  getUserPosts,
  createPost,
  updatePost,
  deletePost,
  addLike,
} = require("../controllers/postController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getUserPosts);

router.post("/", protect, createPost);

router.put("/:id", protect, updatePost);

router.put("/:id/like", protect, addLike);

router.delete("/:id", protect, deletePost);

module.exports = router;
