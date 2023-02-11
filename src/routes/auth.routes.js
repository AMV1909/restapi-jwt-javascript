import { Router } from "express";

import { signup, signin, profile } from "../controllers/auth.controller.js";
import { verifyToken } from "../jwt/jwt.js";

const router = Router();

router.get("/profile", verifyToken, profile);

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
