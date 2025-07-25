import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";



const connectDB = async () => {
    try {
        const connectionResponse = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !!  DB HOST: ${connectionResponse.connection.host}`)
        // console.log(`Full Connection Response: ${JSON.stringify(connectionResponse)}`); Instead of this, we can use console.dir with depth: null to print the full object 
        // console.dir(connectionResponse, {depth: null}) 
    } catch (error) {
        console.error("Error in connecting to MongoDB: " + error);
        console.log("Full URL: " + `${process.env.MONGODB_URI}/${DB_NAME}`);
        process.exit(1); // node process failure se exit hua isliye 1 liye else aur bhi digits hota h
    }
}

export default connectDB;