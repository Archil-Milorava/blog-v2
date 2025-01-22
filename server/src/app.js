import cors from "cors";
import "dotenv/config";
import express from "express";

import { v2 as cloudinary } from "cloudinary";

import blogRouter from "./routes/blogs/blog.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json());

app.use("/api/v1", blogRouter);

export default app;
