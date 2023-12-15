// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running at ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed :", error);
  });

// import { DB_NAME } from "./constants";
// import express from "express";
// const app = express();
// (async () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     app.on("error", (error) => {
//         console.log("ERROR: ",error);
//         throw error
//     })
//     app.listen(process.env.PORT,() => {
//         console.log(`app is listening on${process.env.PORT}`)
//     })
//   } catch (error) {
//     console.error("ERROR: ",error);
//     throw error;
//   }
// })();
