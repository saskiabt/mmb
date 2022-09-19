require("dotenv").config();
const mongoose = require("mongoose");

const mongoURL = process.env.DB_URL;

const connect = async () => {
  try {
    await mongoose.connect(
      mongoURL,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
      () => {
        console.log(`Connected to mongoDB`);
      }
    );
  } catch (err) {
    if (err) throw new Error("Error in connecting to mongoose");
    process.exit(1);
  }
};

module.exports = connect;
