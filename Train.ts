import { Management } from "./Management";
import {Station} from "./Station";
import { Time } from "./Time";
    
export class Train{
    Name:string;
    TrainNo : string;
    private routeTime:Map<string, Time>;
    private routeStation:Map<string,Station>;

    constructor(name:string,TrainNo:string,route:Map<string, Time>,routeStation:Map<string, Station>){
        this.Name=name;
        this.routeTime = new Map(route);
        this.routeStation = new Map(routeStation);
        this.TrainNo = TrainNo;
        Management.trainList.push(this);
        Management.trainNo[TrainNo]=this;
    }
    addStation(station:Station, time : Time){
        this.routeTime[Station.name] = time;
        this.routeStation[Station.name] = station;
    }
    Return_Route(){
        return [this.routeStation,this.routeTime];
    }
}
