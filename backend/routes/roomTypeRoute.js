import express from "express";
import { createRoomType, getAllRoomTypes } from "../controllers/roomTypeControllers.js";

import isAuthenticated from "../middleware/isAuthenticated.js"

const router = express.Router();

router.route("/createRoomType").post(isAuthenticated,createRoomType);
router.route("/getAllRoomTypes").get(isAuthenticated ,getAllRoomTypes);

export default router;


