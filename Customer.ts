import {Account} from "./Account"
import { Agent } from "./Agent";
import { AccountType,OrderStatus} from "./Enum"
import { Order } from "./Order";
import {Train} from "./Train"

export class Customer extends Account{
    private __seatNO : string | undefined;
    private __Train : Train | undefined;
    private __Orders : Array<Order> = [];
    private __allotedAgent : Agent | undefined;
    private __phoneNumber : string;
    private __RejectedOrder : Array<Order> = [];
    constructor(name:string, password:string, phoneNo : string){
        super(name,new Date(),AccountType.Customer,password);
        this.__phoneNumber = phoneNo;
    }
    addOrder(Order:Order) : void{
        this.__Orders.push(Order);
    }
    updateOrderStatus(orderId : number, status : number) : void{
        for(let i of this.__Orders){
            if(i.orderId == orderId){
                i.updateOrderStatus(status);
            }
        }
    }
    getReciept(orderId : number){
        for(let i of this.__Orders){
            if(i.orderId == orderId){
                return i.getReciept();
            }
        }
    }
    getOrder(orderId : number) : Order|null{
        for(let i of this.__Orders){
            if(i.orderId == orderId){
                return i;
            }
        }
        return null;
    }
    updateTrain(seatNo : string, train : Train){
        this.__Train = train;
        this.__seatNO = seatNo;
    }

    getOrderStatus(orderId : number){
        for(let i of this.__Orders){
            if(i.orderId == orderId){
                return i.getOrderStatus();
            }
        }
    }
}