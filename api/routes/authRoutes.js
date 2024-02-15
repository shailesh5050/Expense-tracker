import express from "express";
const router = express.Router();
import { signUp, signIn } from "../controller/authController.js";
router.post("/auth/signup", signUp);
router.post("/auth/signin", signIn);

export default router;
