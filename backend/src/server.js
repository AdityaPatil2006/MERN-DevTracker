import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import projectsRoutes from "./routes/projectsRoutes.js";

const app = express();
const PORT = process.env.PORT || 5002;

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(express.json());

app.use("/api/projects", projectsRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server Started at PORT : ", PORT);
  });
});
