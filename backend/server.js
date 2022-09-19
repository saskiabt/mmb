const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const connect = require("./config/database");

const port = process.env.PORT || 9000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connect().catch((err) => console.log(err));

app.use("/api/posts", require("./routes/postRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
