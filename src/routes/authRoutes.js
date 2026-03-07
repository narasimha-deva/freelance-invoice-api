import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Register API working");
});

router.post("/login", (req, res) => {
  res.send("Login API working");
});

export default router;