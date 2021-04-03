import {Agent} from "./Agent";
import {Customer} from "./Customer";
import {OrderStatus} from "./Enum";
import {Restaurant} from "./Restaurant";
import {Station} from "./Station";
import {Train} from "./Train";

export class Order{
    private customer:Customer;
    Order_Status:string;
    private agent: Agent;
    private seat_Number: string;
    private train: Train;
    private delivery_station: Station;
    private selected_Items: [];
    constructor(customer:Customer,status:number=0,agent:Agent,seat_Number:string,train:Train,delivery_station:Station,items){
        this.customer=customer;
        this.Order_Status=OrderStatus[status];
        this.agent=agent;
        this.seat_Number=seat_Number;
        this.train=train;
        this.delivery_station=delivery_station;
        this.selected_Items=items;
    }
    Track_Order(){
        return this.Order_Status;
    }
    updateOrderStatus(status:number){
        this.Order_Status=OrderStatus[status];
    }
    getCustomer(){
        return this.customer;
    }
    getAgent(){
        return this.agent;
    }
    getSeatNumber(){
        return this.seat_Number;
    }
    getTrain(){
        return this.train;
    }
    getDeliveryStation(){
        return this.delivery_station;
    }
    getItems(){
        return this.selected_Items;
    }
}
// var c= new Customer("a","B","C","d");
// var n= new Agent();
// var m=new Map();
// m.set("!1","Try");
// var t=new Train("train",m);
// var s=new Station("asdd");
// var item=["x","y","z"];
// var o= new Order(c,1,n,"a11",t,s,item);
// console.log(o.Track_Order());
