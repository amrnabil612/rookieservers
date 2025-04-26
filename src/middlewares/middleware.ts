import { Request, Response, NextFunction } from "express";

export function validateCarRequest(req: Request, res: Response, next: NextFunction) {
    let carId = req.params.id; 
    if (carId === undefined) {
        carId = req.body.id;
    }

    const { Brand, Model, Class } = req.body;

    if (carId === undefined || !Brand || !Model || !Class) {
        res.status(400).json({ message: "All fields are required" });
    }
    else
    {
        next();
    }
}

export function validateUserRequest(req: Request, res: Response, next: NextFunction) {
    let userId = req.params.id; 
    if (userId === undefined) {
        userId = req.body.id;
    }

    const { name, age } = req.body;

    if (userId === undefined || !name || !age ) {
        res.status(400).json({ message: "All fields are required" });
    }
    else
    {
        next();
    }
}
