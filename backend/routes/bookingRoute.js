import express from "express";
import { createBooking } from "../controllers/bookingControllers.js";

const router = express.Router();

router.route("/createBooking").post(createBooking);

export default router;
