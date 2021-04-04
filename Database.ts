import { Agent } from './Agent';
import { Customer } from './Customer';
import { AccountType } from './Enum';
import { Item } from './Item';
import { Menu } from './Menu';
import { Restaurant } from './Restaurant';
import { Station } from './Station';
import { Time } from './Time';
import {Train} from './Train';
import {Management} from './Management';

const fs = require("fs");
export class Database{
    static instance: Database|null = null;

    private constructor(){
    }

    static getInstance() : Database{
        if (this.instance==null){
            this.instance = new Database();
        }
        return this.instance;
    }

    static writeState(){
          try {
            fs.writeFileSync("./data/Customer.json", JSON.stringify(Management.Customers))
          } catch (err) {
            console.error(err)
          }
    }

    static readState(){
        try {
            Management.Customers = JSON.parse(fs.readFileSync("./data/Customer.json", 'utf8'));
        } catch (err) {
            console.error(err)
            return false
        }
    }
    loginStatus(username:string, password:string) : string{
        return AccountType[0];
    }
    getCustomer(username:string) : Customer{
        return null;
    }
    getTrain(trainNo:string) : Train | null{
        return null;
    }
    getMenu(Train : Train,  timemax : Time) : Map<string,Array<string>>{
        return null;
    }
    getRestaurant(username:string) : Restaurant{
        return null;    
    }
    getAgent(username:string) : Agent{
        return null;
    }
}

//let customer = new Customer("abhishek","gandhi","hiiii","9191919191");
Database.readState();
console.log(Management.Customers[0]);