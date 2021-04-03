import {FoodType} from "./Enum"
export class Item{
    name: string;
    price: number;
    type : string;
    constructor(name : string,price : number,type : number){
        this.name = name;
        this.price = price;
        this.type = FoodType[type];
    }
}