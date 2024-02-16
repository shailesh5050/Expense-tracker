import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import {
  createExpense,
  getExpense,
  deleteExpense,
} from "../controller/epenseController.js";
const router = express.Router();

router.post("/create", verifyToken, createExpense);
router.get("/get", verifyToken, getExpense);
router.delete("/delete/:id", verifyToken, deleteExpense);

export default router;
