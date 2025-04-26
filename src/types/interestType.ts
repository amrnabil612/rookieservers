import { car } from "./carType";
import { user } from "./usertype";

export class interest 
{
    public User: user;
    public Car: car;

    constructor(User: user, Car: car)
    {
        this.User= new user (User.id, User.name, User.age);
        this.Car=new car (Car.Id, Car.Brand, Car.Model, Car.Model);
    }
}