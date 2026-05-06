import { Router } from "express";
import {
 createProject,
 } from "../controllers/auth.controller.js";

const router = Router();

router.post('/', authenticate, authorize('admin'), createProject);

export default router;


