
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
              fs.writeFileSync("./data/Customers.json", JSON.stringify(Management.Customers))
              fs.writeFileSync("./data/Restaurants.json", JSON.stringify(Management.Application))
              fs.writeFileSync("./data/Stations.json", JSON.stringify(Management.stationList))
              fs.writeFileSync("./data/Trains.json", JSON.stringify(Management.trainList))
          } catch (err) {
              console.error(err)
          }
    }


    static readState(){
        try {
            let arrCust = JSON.parse(fs.readFileSync("./data/Customers.json", 'utf8'));
            for (let i=0;i<arrCust.length;i++){
                Management.Customers.push(Object.setPrototypeOf(arrCust[i], Customer.prototype));
            }
            arrCust = JSON.parse(fs.readFileSync("./data/Restaurants.json", 'utf8'));
            for (let i=0;i<arrCust.length;i++){
                Management.Application.push(Object.setPrototypeOf(arrCust[i], Restaurant.prototype));
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


