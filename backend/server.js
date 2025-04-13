const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { createServer } = require("http");

const dotenv = require("dotenv");
dotenv.config();

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});

const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
