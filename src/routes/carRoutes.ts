import { Router } from "express";
import { getAllCars, createCar, getcar, deleteCar } from "../models/cars";
import { validateCarRequest } from "../middlewares/middleware"

export const carRouter= Router();

carRouter.get("/", getAllCars);
carRouter.get("/:id", getcar);
carRouter.post("/", validateCarRequest, createCar);
carRouter.delete("/", deleteCar);
