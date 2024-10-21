const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dishavaghasiya2311:dishavaghasiya2311@cluster0.ifmvo.mongodb.net/node-js-exam"
    );
    console.log("MongoDB connected successfully.....!");
  } catch (err) {
    console.error(err.message);
    return false;
  }
};

module.exports = connectDB;
