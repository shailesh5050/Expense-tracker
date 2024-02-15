import express from "express";
const router = express.Router();

router.get("/auth/signup", (req, res) => {
  res.json({ message: "SignIn Routes" }).status(200);
});

export default router;
