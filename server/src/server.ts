import express, { Application, NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";

import routes from "./routes";
import { apiErrorHandler } from "./errors";
import { CustomError } from "./interfaces/errors";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(
  helmet({
    contentSecurityPolicy: false, // Disable the CSP header
    frameguard: { action: "deny" }, // Block embedding in frames
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api", routes);

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  const error: CustomError = new Error(
    `Can't find ${req.originalUrl} on the server!`
  );
  error.statusCode = 404;
  next(error);
});

app.use(apiErrorHandler as any);

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Databse connection failed:", error);
  }
};

app.listen(PORT, async () => {
  await connectDatabase();

  console.log(`Server is running on port ${PORT}`);
});
