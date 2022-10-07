const express = require("express");

const router = express.Router();

const {
  getUserPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getUserPosts);

router.post("/", protect, createPost);

router.put("/:id", protect, updatePost);

router.delete("/:id", protect, deletePost);

module.exports = router;
