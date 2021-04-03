import {Item} from "./Item"
export class Menu{
    private __Items : Array<Item>;
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
    addItembyName(name:string , price:number){
        let item = new Item(name, price);
        this.__Items.push(item);
    }
}