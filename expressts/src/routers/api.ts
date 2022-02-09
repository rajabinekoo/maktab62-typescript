import express, { Router } from "express";
import {
  errorHandler,
  getReuqestHandler as getUsers,
  postReuqestHandler as createUser,
  putReuqestHandler as updateUser,
  deleteRequestHandler as deleteUser
} from "./user";

const router = Router();

router.get("/user", getUsers, errorHandler);
router.post("/user", createUser, errorHandler);
router.put("/user/:id", updateUser, errorHandler);
router.delete("/user/:id", deleteUser, errorHandler);

export default router;
