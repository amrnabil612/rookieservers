import { Router } from "express";
import { createUser, getUser, deleteUser } from "../models/user";
import { validateCarRequest, validateUserRequest } from "../middlewares/middleware"

export const userRouter= Router();

userRouter.get("/:id", getUser);
userRouter.post("/", validateUserRequest, createUser);
userRouter.delete("/", deleteUser);