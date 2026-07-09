import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // dynamically build the exact web address (URL) your application needs to connect to your database.
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        // debugging purpose
        console.log(`\n mongoDB connected ! DB Host: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGODB CONNECTION ERROR: ", error);
        process.exit(1);
    }
}

export default connectDB