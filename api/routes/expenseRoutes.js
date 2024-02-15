import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import { createExpense } from "../controller/epenseController.js";
const router = express.Router();

router.post("/create", verifyToken, createExpense);

export default router;
