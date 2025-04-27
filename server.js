import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import connectDB from "./config/db.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

//Middleware to handle cors
app.use(
    cors({
      origin: process.env.CLIENT_URL || "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
);

//Middleware
app.use(express.json());
connectDB();


//Routes
//app.use("/api/v1/auth", authRouter);
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

//Server uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Start the server
const PORT = process.env.PORT || 8099;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

