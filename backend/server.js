const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { createServer } = require("http");

const dotenv = require("dotenv");
const connectMongoDb = require("./config/db");
dotenv.config();

dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.production" : ".env",
});
const authRoutes = require("./routes/auth");

connectMongoDb();
const app = express();
const httpServer = createServer(app);
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);

httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
