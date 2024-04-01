import express from "express";
import { dbConnection } from "./databases/dbConnection.js"; 
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js"
import cors from "cors";

const app = express();

dotenv.config({path: "./config/config.env"});

// connect frontend and backend using cors
// provide frontend url as parameter in origin

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
}))


// MIDDLEWARE

app.use(express.json()); // converts json data into string
app.use(express.urlencoded({extended :true})); //checks data type of the data
app.use("/api/v1/message",messageRouter);
dbConnection();
export default app;