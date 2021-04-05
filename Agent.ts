import {Location} from "./Location";
import {Order} from "./Order"
import { Restaurant } from "./Restaurant";
import {AccountType, AgentStatus} from "./Enum"
import { Account } from "./Account";
import { Management } from "./Management";
export class Agent extends Account{
    private __location: Location|null;
    private __allottedorder : Order|null;
    IsFree : string;
    restaurant : number;
    deliveredCount : number = 0;
    failedCount : number = 0;
    constructor(name:string,username:string,password:string,restaurant: Restaurant, location:Location|null = null, allottedOrder: Order|null = null){
        super(name,username,new Date(),AccountType.Agent,password);
        this.__location = location;
        this.__allottedorder = allottedOrder;
        this.restaurant = restaurant.getID();
        this.IsFree = AgentStatus[0];
        Management.agentList.set(this.getID(), this);
        Management.agentListForStoring.push(this);
        Management.loginA.set(username,this);
        restaurant.AddAgent(this);
    }

    addRestaurant(restaurant : Restaurant){
        this.restaurant = restaurant.getID();
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
            let ar=Management.ApprovedRestaurants.get(this.restaurant);
            if(ar){
                let items = ar.getOrderDetails(this.__allottedorder.orderId);
                if (items) {
                    for (let i of items)
                        this.__allottedorder.updateOrderStatus(Status, i);
                }
            }
        }
        if(Status == 6){
            this.deliveredCount++;
        }
        else{
            this.failedCount++;
        }
    }
    updateStatus(status: number){
        let r = Management.ApprovedRestaurants.get(this.restaurant);
        if(r)
            r.updateAgentStatus(this,status);
    }
    getAlocatedOrder(){
        return this.__allottedorder;
    }
}