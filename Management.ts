import {Account} from "./Account";
import {AccountType} from "./Enum";
class Management extends Account{
    static instance = null;
    static Application = [];
    stationList = [];
    trainList = [];
    private constructor(){
        super("Management",new Date(),AccountType.Management,"admin");
    }
    static getInstance() : Management{
        if (this.instance==null){
            this.instance = new Management();
        }
        return this.instance;
    }
    addStation(Station) : void{
        this.stationList.push(Station);
    }
    removeStation(Station) : void{
        this.stationList.splice(this.stationList.indexOf(Station));
    }
    addTrain(Train) : void{
        this.trainList.push(Train);
    }
    removeTrain(Train) : void{
        this.trainList.slice(this.trainList.indexOf(Train));
    }

}
var m = Management.getInstance();
m.trainList = []
console.log('h')
console.log(m.getID());