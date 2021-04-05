import {Restaurant} from "./Restaurant";
import {Item} from "./Item";
import { Management } from "./Management";
import { Account } from "./Account";

export class Station{
    name;
    private __restaurant: Array<Restaurant> = [];
    private __food = new Set();
    private __ID : number;
    deliveredCount : number = 0;
    failedCount : number = 0;
    constructor(name:string){
        this.name = name;
        this.__ID = Account.unique++; 
        Management.stationList[this.__ID] = (this);
        Management.stationListForStoring.push(this);
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
    getID(){
        return this.__ID;
    }
}