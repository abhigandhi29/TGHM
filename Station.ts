import {Restaurant} from "./Restaurant";
import {Item} from "./Item";

export class Station{
    name;
    private __restaurant: Array<Restaurant> = [];
    private __food = new Set();
    constructor(name:string){
        this.name = name;
    }
    addRestaurant(restaurant:Restaurant){
        this.__restaurant.push(restaurant);
    }
    getRestaurant(){
        return this.__restaurant;
    }
    addItem(item: Item){
        this.__food.add(item);
    }
    getItem(){
        return Array.from(this.__food);
    }
}