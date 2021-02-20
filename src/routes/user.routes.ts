import { Router } from "express";
const router = Router();

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/user.controller";

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
