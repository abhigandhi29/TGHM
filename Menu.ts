import {Item} from "./Item"
import { Restaurant } from "./Restaurant";
export class Menu{
    private __Items : Array<Item> = [];
    constructor(){
    }
    getMenuItems(){
        return this.__Items;
    }
    getPrice(s:string){
        for (let i of this.__Items){
            if(i.name==s){
                return i.price;
            }
        }
    }
    addItem(Item : Item){
        this.__Items.push(Item);
    }
    addItembyName(name:string , price:number, type: number, restaurant : Restaurant){
        let item = new Item(name, price, type,restaurant);
        this.__Items.push(item);
    }
}