import {FoodType} from "./Enum"
import { Restaurant } from "./Restaurant";
export class Item{
    name: string;
    price: number;
    type : string;
    restaurant : Restaurant;
    constructor(name : string,price : number,type : number,restaurant : Restaurant){
        this.name = name;
        this.price = price;
        this.type = FoodType[type];
        this.restaurant = restaurant;
    }
}