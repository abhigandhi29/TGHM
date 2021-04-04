import {Account} from "./Account";
import {AccountType, ApprovalStatus} from "./Enum";
import {Station} from "./Station";
import {Train} from "./Train";
import {Restaurant} from "./Restaurant";
import { Customer } from "./Customer";
import { Agent } from "./Agent";
export class Management extends Account{
    static instance: Management|null = null;
    static ApprovedRestaurants : Array<Restaurant> = [];
    static Application: Array<Restaurant> = [];
    static Customers : Array<Customer> = [];
    static stationList: Array<Station> = [];
    static trainList: Array<Train> = [];
    static loginC : Map<string, Customer> = new Map<string, Customer>();
    static loginR : Map<string, Restaurant> = new Map<string, Restaurant>();
    static loginA : Map<string, Agent> = new Map<string, Agent>();
    static trainNo : Map<string,Train> = new Map<string,Train>();
    private constructor(){
        super("Management","Manager",new Date(),AccountType.Management,"admin");
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
    updateRestarantStatus(Restarant:Restaurant,status:number) : void{
        let x = Management.Application.indexOf(Restarant);
        Restarant.accetanceStatus = ApprovalStatus[status];
        Management.Application.slice(x);
        if(status != ApprovalStatus.Rejected){
            Management.ApprovedRestaurants.push(Restarant)
        }
        
    }
}
var m = Management.getInstance();
console.log(m.getID());