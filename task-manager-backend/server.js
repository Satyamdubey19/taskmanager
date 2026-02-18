import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send("Task Manager API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
