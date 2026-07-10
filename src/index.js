// require('dotenv').config({path: './env'}) to just avoid using require() in the project.
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js"; // 1. Import the Express app

dotenv.config({ path: './.env' }); // 2. Ensure standard .env naming

const PORT = process.env.PORT || 8000; // 3. Store port in a variable

connectDB()
  .then(() => {
      // Listen for Express errors before starting the server
      app.on("error", (err) => {
          console.error("❌ Express application error:", err);
      });
      
      app.listen(PORT, () => {
          console.log(`⚙️ Server is running at port: ${PORT}`); // 4. Log the actual port used
      });
  })
  .catch((err) => {
      console.log("❌ MongoDB connection failed: ", err);
  });