const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", false);
const connectMongoDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `MongoDB connected successfully to : ${connection.connection.host}`
    );
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectMongoDb;
