const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const connect = require("./config/database");
const { errorHandler } = require("./middleware/errorHandler");

const port = process.env.PORT || 9000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect().catch((err) => console.log(err));

app.use("/api/feed", require("./routes/postRoutes"));
app.use("/api/posts", require("./routes/userPostRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
  app.get("/", (req, res) => {
    res.send("Please set env mode to production");
  });
}

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
