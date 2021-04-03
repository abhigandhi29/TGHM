import {Location} from "./Location"
export class Agent{
    private location: Location;
    private allotted_order;
    IsFree;
    constructor(){
        this.IsFree=0;
    }
    Update_Location(loc:Location){
        this.location=loc;
    }
    get_Location(){
        return this.location;
    }
    allot_Order(){

    }
    complete_Order(){
        
    }

}