import {Management} from "./Management";

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
            Management.Customers = JSON.parse(fs.readFileSync("./data/Customers.json", 'utf8'));
        } catch (err) {
            console.error(err)
            return false
        }
    }
}