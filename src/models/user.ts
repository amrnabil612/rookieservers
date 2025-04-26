import { Request, Response } from "express";
import { user } from "../types/usertype"

export let users: user[] = [];

export function createUser(req: Request, res: Response) {
    
    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;

    if (id !== undefined && name !== undefined && age !== undefined)
    {
        const newUser: user = { 
            id:id,
            name:name,
            age:age 
        }; 
        users.push(newUser);
        res.status(201).json("User Creation Successful");
    }
}

export function getUser(req: Request, res: Response) {
    const index = req.params.id;
    const User = users.find((u) => u.id === parseInt(index)); 

    if (User) {
        res.status(200).json(User);
    } else {
        res.status(404).json({ message: "User not found" });
    }
}

export function deleteUser(req: Request, res: Response)
{
    const index = req.params.id;
    const User = users.findIndex((u) => u.id === parseInt(index)); 

    if (User !== -1) {
        users.splice(User, 1);
        res.status(200).json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
}