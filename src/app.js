import express from "express"
// These are two of the most essential middleware packages. They both handle how your server communicates with clients (like a web browser)
import cors from "cors"
import cookieParser from "cookie-parser"

const app= express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true
}))

// These four configure middleware, which are essentially functions that process incoming HTTP requests before they reach your actual route handlers (like app.get or app.post).
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

export {app}