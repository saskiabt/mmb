const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../schemas/UserSchema");
require("dotenv").config();

// PROTECTS THE USER/ME ROUTE TO EVERYONE OTHER THAN THE AUTHORIZED USER ACCESSING IT
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      // eslint-disable-next-line prefer-destructuring
      token = req.headers.authorization.split(" ")[1];

      // decode and verify token:
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // GET USER ID FROM THE TOKEN (THE ID PARAMETER IS DECLARED IN THE GEBERATE JWT FUNCTION IN USER CONTROLLER )
      // returns the username without the password (due to 'select -password')
      try {
        req.user = await User.findById(decoded.id).select("-password");
        console.log(req.user);
        next();
      } catch (err) {
        if (err) console.log(err);
      }
    } catch (err) {
      if (err) console.log(err);
      res.status(401);
      throw new Error("Login not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, No Token");
  }
});

module.exports = { protect };
