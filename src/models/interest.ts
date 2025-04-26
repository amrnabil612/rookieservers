import { Request, Response } from "express";
import { interest } from "../types/interestType";
import { users } from "./user";


let interests: interest[] = [];

export function createInterest(req: Request, res: Response) {
    
    const User = req.body.User;
    const Car = req.body.Car;

    if (User !== undefined && Car !== undefined)
    {
        const newInterface: interest = { 
            User:User,
            Car:Car
        }; 
        interests.push(newInterface);
        res.status(201).json("Interest Creation Successful");
    }
}

export function getInterest(req: Request, res: Response) {
    const index = req.params.id;
    const userInterest = users.find((u) => u.id === parseInt(index)); 

    if (userInterest) {
        res.status(200).json(userInterest);
    } else {
        res.status(404).json({ message: "User Interests not found" });
    }
}