const mongoose = require("mongoose");
require("dotenv").config();

const server = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = server;
