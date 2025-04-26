import { Router } from "express";
import { createInterest, getInterest } from "../models/interest"
import { validateUserRequest } from "../middlewares/middleware"

export const interestRouter= Router();

interestRouter.get("/", getInterest);
interestRouter.post("/:id", validateUserRequest, createInterest);