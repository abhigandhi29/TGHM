import {Location} from "./Location";
import {Order} from "./Order"
import { Restaurant } from "./Restaurant";
export class Agent{
    private __location: Location;
    private __allottedorder : Order;
    IsFree : boolean;
    restaurant : Restaurant
    constructor(restaurant : Restaurant){
        this.IsFree=true;
        this.restaurant = restaurant;
    }
    Update_Location(loc:Location){
        this.__location=loc;
    }
    get_Location(){
        return this.__location;
    }
    updateAllotedOrder(order){
        this.__allottedorder = order;
    }
    updateOrderStatus(Status : number){
        this.__allottedorder.updateOrderStatus(Status);
    }

}