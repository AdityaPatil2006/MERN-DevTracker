import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";

import { connectDB } from "./config/db.js";
import projectsRoutes from "./routes/projectsRoutes.js";

const app = express();
const PORT = process.env.PORT || 5002;
const __dirname = path.resolve();

dotenv.config();

if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
    }),
  );
}

app.use(express.json());

app.use("/api/projects", projectsRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server Started at PORT : ", PORT);
  });
});
