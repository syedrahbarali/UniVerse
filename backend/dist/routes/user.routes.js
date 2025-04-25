import { createAccount, login } from "../controllers/auth.controller.js";
import express from "express";
const router = express.Router();
router.post("/login", login);
router.post("/register", createAccount);
export default router;
