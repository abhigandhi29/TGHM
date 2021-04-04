import { Account } from "./Account";
import { Management } from "./Management";
import {Station} from "./Station";
import { Time } from "./Time";
    
export class Train{
    Name:string;
    TrainNo : string;
    private routeTime:Map<string, Time>;
    private routeStation:Map<string,number>;
    private __Id : number;
    constructor(name:string,TrainNo:string,route:Map<string, Time>,routeStation:Map<string, number>){
        this.Name=name;
        this.routeTime = new Map(route);
        this.routeStation = new Map(routeStation);
        this.TrainNo = TrainNo;
        this.__Id  = Account.unique++;
        Management.trainList[this.__Id] = (this);
        Management.trainNo[TrainNo]=this;
        Management.trainListForStoring.push(this);
    }
    addStation(station:Station, time : Time){
        this.routeTime[Station.name] = time;
        this.routeStation[Station.name] = station.getID();
    }
    Return_Route(){
        return [this.routeStation,this.routeTime];
    }
    getID(){
        return this.__Id;
    }
}
