import express from "express"
import { getLeaderboard, submitScore } from "../controllers/route.js"
const router = express.Router()

router.get("/leaderboard", getLeaderboard)
router.post("/leaderboard", submitScore)

export default router