import express from "express";
import { createroom, getRoom } from "../controllers/roomControllers.js";

const router = express.Router();
router.route("/create").post(createroom);
router.route("/getRoom").get(getRoom);
export default router;