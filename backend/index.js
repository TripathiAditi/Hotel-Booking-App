import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import roomRoute from "./routes/roomRoute.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/v1/user", userRoute);
app.use("/api/v1/room",roomRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, (req,res) =>{

    console.log(`Server running on PORT ${PORT}`);
});
