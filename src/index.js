// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB Connection failed!!! ", err);
  });

/*
import express from "express";
const app = express();

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    // app.on("error", (error) => {
    //   console.log("Application is not able to talk to Database", error);
    //   throw error;
    // });
    console.log("MongoDB connected successfully");

    app.listen(process.env.PORT, () => {
      console.log(`App is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(" MongoDB connection failure:", error);
    throw error;
  }
}

connectDB();
*/
