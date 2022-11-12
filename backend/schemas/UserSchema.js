const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Add a Username"],
      immutable: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Add a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
