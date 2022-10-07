const asyncHandler = require("express-async-handler");
const jsonwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const User = require("../schemas/UserSchema");

// GENERATE JSON WEB TOKEN
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
  const { name, email, password } = req.body;
  if (!name) {
    console.error(new Error("Please add name"));
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
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    // 201 is the status of 'created'
    res.status(201);
    res.json({
      _id: user.id,
      name: user.name,
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
      name: user.name,
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
  res.json({ message: "Display user data" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
