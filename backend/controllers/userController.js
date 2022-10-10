const asyncHandler = require("express-async-handler");
const jsonwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const User = require("../schemas/UserSchema");

// GENERATE JSON WEB TOKEN, (which stays )
const generateJWT = (id) => {
  const token = jsonwt.sign({ id }, `${process.env.JWT_SECRET}`, {
    expiresIn: "30d",
  });
  return token;
};

// register a new user:
// @route POST api/users
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username) {
    console.error(new Error("Please add username"));
  } else if (!email) {
    console.error(new Error("Please add email"));
  } else if (!password) {
    console.error(new Error("Please add password"));
  }

  // check if user exists:
  const thisUserExists = await User.findOne({ email });
  if (thisUserExists) {
    res.status(400);
    console.error(new Error("User already exists"));
  }

  // Hash password:
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    // 201 is the status of 'created'
    res.status(201);
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      // eslint-disable-next-line no-underscore-dangle
      token: generateJWT(user._id),
    });
  } else {
    res.status(400);
    console.error(new Error("Invalid user data"));
  }
});

// authenticate a new user:
// @route POST api/users/login
// @access PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check for user email
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      // eslint-disable-next-line no-underscore-dangle
      token: generateJWT(user._id),
    });
  } else {
    res.status(400);
    console.error(new Error("Invalid Credentials"));
  }
});

// get individual user data:
// @route GET api/users/me
// @access PRIVATE
const getMe = asyncHandler(async (req, res) => {
  const { _id, username, email } = req.user;
  res.status(200).json({
    id: _id,
    username,
    email,
  });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
