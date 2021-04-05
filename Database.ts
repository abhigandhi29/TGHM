
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
import { System } from './System';


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
              fs.writeFileSync("./data/Customers.json", JSON.stringify(Management.CustomersForStoring))
              fs.writeFileSync("./data/Restaurants.json", CircularJSON.stringify(Management.restaurantForStoring))
              fs.writeFileSync("./data/Stations.json", CircularJSON.stringify(Management.stationListForStoring))
              fs.writeFileSync("./data/Trains.json", CircularJSON.stringify(Management.trainListForStoring))
              fs.writeFileSync("./data/Agents.json", CircularJSON.stringify(Management.agentListForStoring))
          } catch (err) {
              console.error(err)
          }
    }


    static readState(){
        try {
            let arrCust = JSON.parse(fs.readFileSync("./data/Customers.json", 'utf8'));
            for (let i=0;i<arrCust.length;i++){
                let x = Object.setPrototypeOf(arrCust[i], Customer.prototype);
                Management.Customers[x.getID()] = (x);
                Management.loginC[x.getUsername()] = x;
                Account.unique= Math.max(x.getID(),Account.unique);
                Account.unique++;
            }
            arrCust = JSON.parse(fs.readFileSync("./data/Restaurants.json", 'utf8'));
            for (let i=0;i<arrCust.length;i++){
                let x = Object.setPrototypeOf(arrCust[i], Restaurant.prototype);
                Management.ApprovedRestaurants[x.getID()] =(x);
                Management.loginR[x.getUsername()] = x;
                Account.unique= Math.max(x.getID(),Account.unique);
                Account.unique++;
            }
            arrCust = JSON.parse(fs.readFileSync("./data/Stations.json", 'utf8'));
            for (let i=0;i<arrCust.length;i++){
                let x = Object.setPrototypeOf(arrCust[i], Station.prototype)
                Management.stationList[x.getID()] = (x);
            }
            arrCust = JSON.parse(fs.readFileSync("./data/Trains.json", 'utf8'));
            for (let i=0;i<arrCust.length;i++){
                let x = Object.setPrototypeOf(arrCust[i], Train.prototype);
                Management.trainList[x.getID()] = (x);
                Management.trainNo[x.TrainNo] = x;
            }
            arrCust = JSON.parse(fs.readFileSync("./data/Agents.json", 'utf8'));
            for (let i=0;i<arrCust.length;i++){
                let x = Object.setPrototypeOf(arrCust[i], Agent.prototype);
                Management.agentList[x.getID()] = (x);
                Management.loginA[x.getUsername()] = x;
                System.active_agent.push(x);
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
        let timemin = new Time();
        timemin.updateTime();
        let [rStation,rTime]=Train.Return_Route();
        let reqStations = [];
        for(let key of Array.from( rTime.keys()) ) {
            if(rTime[key].lessThanEqual(timemax)&&timemin.lessThanEqual(rTime[key])){
                reqStations.push(key);
            }
        }
        let items= new Map<string,Array<string>>();
        for(let stat of reqStations){
            items[stat]=rStation[stat].getItem();
        }
        return items;
    }
    getRestaurant(username:string) : Restaurant{
        return null;    
    }
    getAgent(username:string) : Agent{
        return null;
    }
}

let c = new Customer("Shashvat", "Shash", "123", "123456789");
let r = new Restaurant("Dominos", "Dom", "234", 15);
Database.writeState();



Database.readState();