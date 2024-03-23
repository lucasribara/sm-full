import express from "express";
import {
    getUser, 
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

//GET
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

//UPDATE
router.patch("/:id/:frindId", verifyToken, addRemoveFriend);

export default router;