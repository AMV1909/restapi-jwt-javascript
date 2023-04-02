import { Router } from "express";
import { helloWorld } from "../controllers/index.controller.js";

const router = Router();

router.get("/", helloWorld);

export { router as index };
