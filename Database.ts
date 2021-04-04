
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
import { readFile } from 'node:fs';
import { Account } from './Account';


const fs = require("fs");
const CircularJSON = require('circular-json');

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
              fs.writeFileSync("./data/Customers.json", JSON.stringify(Management.Customers))
              fs.writeFileSync("./data/Restaurants.json", CircularJSON.stringify(Management.ApprovedRestaurants))
              fs.writeFileSync("./data/Stations.json", CircularJSON.stringify(Management.stationList))
              fs.writeFileSync("./data/Trains.json", CircularJSON.stringify(Management.trainList))
          } catch (err) {
              console.error(err)
          }
    }


    static readState(){
        try {
            let arrCust = JSON.parse(fs.readFileSync("./data/Customers.json", 'utf8'));
            for (let i=0;i<arrCust.length;i++){
                let x = Object.setPrototypeOf(arrCust[i], Customer.prototype);
                Management.Customers.push(x);
                Account.unique= Math.max(x.getID(),Account.unique);
                Account.unique++;
            }
            arrCust = JSON.parse(fs.readFileSync("./data/Restaurants.json", 'utf8'));
            for (let i=0;i<arrCust.length;i++){
                let x = Object.setPrototypeOf(arrCust[i], Restaurant.prototype);
                Management.ApprovedRestaurants.push(x);
                Account.unique= Math.max(x.getID(),Account.unique);
                Account.unique++;
            }
            arrCust = JSON.parse(fs.readFileSync("./data/Stations.json", 'utf8'));
            for (let i=0;i<arrCust.length;i++){
                Management.stationList.push(Object.setPrototypeOf(arrCust[i], Station.prototype));
            }
            arrCust = JSON.parse(fs.readFileSync("./data/Trains.json", 'utf8'));
            for (let i=0;i<arrCust.length;i++){
                Management.trainList.push(Object.setPrototypeOf(arrCust[i], Train.prototype));
            }
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



Database.readState();