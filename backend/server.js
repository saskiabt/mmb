const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.PORT || 9000;
const mongoURL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connect = async () => {
  await mongoose.connect(
    mongoURL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => {
      console.log("Connected to mongoDB");
    }
  );
};

connect().catch((err) => console.log(err));

app.use("/api/posts", require("./routes/postRoutes"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
