import express from "express";
const router = express.Router();
import { signUp, signIn, signOut } from "../controller/authController.js";
router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);

export default router;
