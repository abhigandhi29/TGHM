import {Account} from "./Account";
import {AccountType} from "./Enum";
import {Station} from "./Station";
import {Train} from "./Train";
import {Restaurant} from "./Restaurant";
export class Management extends Account{
    static instance: Management|null = null;
    static Application: Array<Restaurant> = [];
    stationList: Array<Station> = [];
    trainList: Array<Train> = [];
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
        this.stationList.push(Station);
    }
    removeStation(Station:Station) : void{
        this.stationList.splice(this.stationList.indexOf(Station));
    }
    addTrain(Train:Train) : void{
        this.trainList.push(Train);
    }
    removeTrain(Train:Train) : void{
        this.trainList.slice(this.trainList.indexOf(Train));
    }

}
var m = Management.getInstance();
m.trainList = [];
console.log('h')
console.log(m.getID());