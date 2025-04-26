import { Request, Response } from "express";
import { car } from "../types/carType"


let cars: car[]=[];

export function getAllCars(req:Request, res:Response)
{
    res.status(200).json(cars)
}

export function createCar(req: Request, res: Response) {
    
    const Id = req.body.Id;
    const Brand = req.body.Brand;
    const Model = req.body.Model;
    const Class = req.body.Class;

    if (Id !== undefined && Brand !== undefined && Model !== undefined && Class !== undefined)
    {
        const newCar: car = { 
            Id:Id,
            Brand:Brand,
            Model:Model,
            Class:Class 
        }; 
        cars.push(newCar);
        res.status(201).json("Car Creation Successful");
    }
}

export function getcar(req: Request, res: Response) {
    const index = req.params.Id;
    const Car = cars.find((c) => c.Id === parseInt(index)); 

    if (Car) {
        res.status(200).json(Car);
    } else {
        res.status(404).json({ message: "Car not found" });
    }
}

export function deleteCar(req: Request, res: Response)
{
    const index = req.params.Id;
    const Car = cars.findIndex((c) => c.Id === parseInt(index)); 

    if (Car !== -1) {
        cars.splice(Car, 1);
        res.status(200).json({ message: 'Car deleted successfully' });
      } else {
        res.status(404).json({ message: 'Car not found' });
      }
}