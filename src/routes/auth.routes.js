import { Router } from "express";
import {
  getAll,
 } from "../controllers/auth.controller.js";

const router = Router();

router.get("/", getAll);

export default router;