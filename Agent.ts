import {Location} from "./Location";
import {Order} from "./Order"
import { Restaurant } from "./Restaurant";
import {AccountType, AgentStatus} from "./Enum"
import { Account } from "./Account";
export class Agent extends Account{
    private __location: Location|null;
    private __allottedorder : Order|null;
    IsFree;
    restaurant : Restaurant;
    deliveredCount : number = 0;
    failedCount : number = 0;
    constructor(name:string,username:string,password:string,restaurant: Restaurant, location:Location|null = null, allottedOrder: Order|null = null){
        super(name,username,new Date(),AccountType.Agent,password);
        this.__location = location;
        this.__allottedorder = allottedOrder;
        this.restaurant = restaurant;
        this.IsFree = AgentStatus[0];
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
        if (this.__allottedorder) {
            let items = this.restaurant.getOrderDetails(this.__allottedorder.orderId);
            if (items) {
                for (let i of items)
                    this.__allottedorder.updateOrderStatus(Status, i);
            }
        }
    }
}