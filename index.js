import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose'; 
import todoRoute from "./routes/todoRoute.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;

app.use("/service/todo", todoRoute)

// app.get("/", (req, res) => {
//     res.send("Welcome to the MERN To-Do List Backend!")
// });

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// })

mongoose.set("strictQuery", true);

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));