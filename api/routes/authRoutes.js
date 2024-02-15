import express from "express";
const router = express.Router();
import { signUp, signIn } from "../controller/authController.js";
router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;
