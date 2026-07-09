// require('dotenv').config({path: './env'}) to just avoid using require() in the project.
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({path: './env'})


connectDB()