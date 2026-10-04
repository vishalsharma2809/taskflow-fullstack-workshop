const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "TaskFlow API is running 🚀",
  });
});

app.get("/api/tasks", (req, res) => {
  res.json([]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });




const taskRoutes = require("./routes/taskRoutes");

app.use("/api/tasks", taskRoutes);