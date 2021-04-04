import {Location} from "./Location";
import {Order} from "./Order"
import { Restaurant } from "./Restaurant";
import {AgentStatus} from "./Enum"
export class Agent{
    private __location: Location;
    private __allottedorder : Order;
    IsFree = AgentStatus[0];
    restaurant : Restaurant;
    constructor(){  
    }
    addRestaurant(restaurant : Restaurant){
        this.restaurant = restaurant;
    }
    Update_Location(loc:Location){
        this.__location=loc;
    }
    get_Location(){
        return this.__location;
    }
    updateAllotedOrder(order: Order){
        this.__allottedorder = order;
    }
    updateOrderStatus(Status : number){
        let items = this.restaurant.getOrderDetails(this.__allottedorder.orderId);
        if (items) {
            for (let i of items)
                this.__allottedorder.updateOrderStatus(Status, i);
        }
    }
}