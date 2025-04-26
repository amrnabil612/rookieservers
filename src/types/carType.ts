export class car 
{
    public Id: number;
    public Brand: string;
    public Model: string;
    public Class:string ;

    constructor(Id:number, Brand: string, Model: string, Class:string ) {
        this.Id= Id;
        this.Brand= Brand;
        this.Model= Model;
        this.Class= Class;
    }
}