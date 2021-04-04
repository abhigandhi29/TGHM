import {Account} from "./Account";
import {AccountType} from "./Enum";
import {Station} from "./Station";
import {Train} from "./Train";
import {Restaurant} from "./Restaurant";
import { Customer } from "./Customer";
export class Management extends Account{
    static instance: Management|null = null;
    static Application: Array<Restaurant> = [];
    static Customers : Array<Customer> = [];
    static stationList: Array<Station> = [];
    static trainList: Array<Train> = [];
    private constructor(){
        super("Management",new Date(),AccountType.Management,"admin");
    }
    static getInstance() : Management{
        if (this.instance==null){
            this.instance = new Management();
        }
        return this.instance;
    }
    addStation(Station:Station) : void{
        Management.stationList.push(Station);
    }
    removeStation(Station:Station) : void{
        Management.stationList.splice(Management.stationList.indexOf(Station));
    }
    addTrain(Train:Train) : void{
        Management.trainList.push(Train);
    }
    removeTrain(Train:Train) : void{
        Management.trainList.splice(Management.trainList.indexOf(Train));
    }
}
var m = Management.getInstance();
console.log('h')
console.log(m.getID());