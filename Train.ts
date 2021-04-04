import {Station} from "./Station";

export class Train{
    Name:string;
    private route:Map<Station, TimeRanges>;
    constructor(name:string,route:Map<Station, TimeRanges>){
        this.Name=name;
        this.route = new Map(route);
    }
    Return_Route(){
        return this.route;
    }
}
