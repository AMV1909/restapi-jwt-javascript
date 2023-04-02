import { Router } from "express";
import {
    createUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser,
} from "../controllers/users.controllers.js";
import { verifyToken } from "../jwt/jwt.js";

const router = Router();

router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUserById);

router.post("/users", createUser);

router.put("/users/:id", verifyToken, updateUser);

router.delete("/users/:id", verifyToken, deleteUser);

export { router as users };
