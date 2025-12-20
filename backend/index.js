import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import roomRoute from "./routes/roomRoute.js";
import roomTypeRoute from "./routes/roomTypeRoute.js";
import cookieParser from "cookie-parser";
import bookingRoute from "./routes/bookingRoute.js";


dotenv.config();
//connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/v1/user", userRoute);
app.use("/api/v1/room",roomRoute);
app.use("/api/v1/roomType",roomTypeRoute);
app.use("/api/v1/createBooking",bookingRoute);


const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
    process.exit(1);
  });