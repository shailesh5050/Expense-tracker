import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnection } from "./utils/db.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

// Connect to MongoDB
dbConnection();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
