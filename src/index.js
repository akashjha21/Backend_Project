import connectDB from "./db/index.js";
import dotenv from "dotenv";

// This is the second approach where we will create another file inside the DB folder and we will import it here in this file so that the code will look less crowded

dotenv.config({path: './.env'})
connectDB();









// we can do this also or it can be done by iife also i.e. immediately invoked function expression 
// function CONNECT_DB(){}
// CONNECT_DB()

// IIFE = (() => {})()

// This is the FIRST APPROACH where we will use the Mongoose connection as well as we will use the Express app connection in the same index.js file
/*
import express from "express";
const app = express();
( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (err) => {
      console.error("Error in connecting to the database", err);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error in connecting to the database", error);
    throw error;

  }
}
)();

*/
