import express from "express";
import { createroom } from "../controllers/roomControllers.js";

const router = express.Router();
router.route("/create").post(createroom);
export default router;