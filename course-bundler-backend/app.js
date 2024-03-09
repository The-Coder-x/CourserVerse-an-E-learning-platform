import express from "express";
import ErrorMiddleware from "./middlewares/Error.js";

import { config } from "dotenv";
config({
  path: "./config/config.env",
});

const app = express();

//! Using the middleWares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//! Importing & Using Routes

import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import payment from "./routes/paymentsRoutes.js";
import other from "./routes/otherRoutes.js";
import cookieParser from "cookie-parser";
app.use(cookieParser());

app.use("/api/v1/", course);
app.use("/api/v1", user);
app.use("/api/v1", payment);
app.use("/api/v1", other);


export default app;

app.use(ErrorMiddleware);
