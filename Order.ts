import {Agent} from "./Agent";
import {Customer} from "./Customer";
import {AgentStatus, OrderStatus} from "./Enum";
import { Item } from "./Item";
import {Restaurant} from "./Restaurant";
import {Station} from "./Station";
import {Train} from "./Train";

export class Order{
    static unique =0;
    private __customer:Customer;
    Order_Status:Array<string>;
    private __agent: Array<Agent>;
    private __seatNumber: string;
    private __train: Train;
    private __deliveryStation: Station;
    private __selectedItems : Array<Item>;
    private __Restaurants = new Set<Restaurant>();
    rejectedItems : Array<Item>;
    orderId;
    constructor(customer:Customer,status:number=0,seat_Number:string,train:Train){
        this.__customer=customer;
        //this.Order_Status=OrderStatus[status];
        //this.__agent=agent;
        this.__seatNumber=seat_Number;
        this.__train=train;
        //this.delivery_station=delivery_station;
        //this.selected_Items=items;
        this.orderId = Order.unique++;
    }
    setDiliveryStation(station : Station){
        this.__deliveryStation = station;
    }
    addAgent(Agent : Agent){
        this.__agent.push(Agent);
    }
    addItem(Item : Item){
        this.__selectedItems.push(Item);
        this.__Restaurants.add(Item.restaurant);
        this.Order_Status.push(OrderStatus[0]);
    }
    Track_Order(){
        return this.Order_Status;
    }
    updateOrderStatus(status:number, Item : Item = null){
        
        switch (status){
            case 0:
                break;
            case 1:
                for(let i of this.Order_Status)
                    i=OrderStatus[status];
                for(let i of Array.from(this.__Restaurants)){
                    i.orderlist.push(this);
                }
                break;
            case 2:
                if(Item!=null){
                    let index = this.__selectedItems.indexOf(Item);
                    this.Order_Status[index] = OrderStatus[index];
                }
                break;
            case 3:
                if(Item!=null){
                    let index = this.__selectedItems.indexOf(Item);
                    this.Order_Status[index] = OrderStatus[index];
                    this.rejectedItems.push(this.__selectedItems[index]);
                }
                break;
            case 4:
                if(Item!=null){
                    let index = this.__selectedItems.indexOf(Item);
                    this.Order_Status[index] = OrderStatus[index];
                }
                break;
            case 5:
                if(Item!=null){
                    let index = this.__selectedItems.indexOf(Item);
                    this.Order_Status[index] = OrderStatus[index];
                }
                break;
            case 6:
                if(Item!=null){
                    let index = this.__selectedItems.indexOf(Item);
                    this.Order_Status[index] = OrderStatus[index];
                }
                break;
        }
    }
    getCustomer(){
        return this.__customer;
    }
    getAgent(){
        return this.__agent;
    }
    getSeatNumber(){
        return this.__seatNumber;
    }
    getTrain(){
        return this.__train;
    }
    getDeliveryStation(){
        return this.__deliveryStation;
    }
    getItems(){
        return this.__selectedItems;
    }
    getReciept(){
        return this.orderId;
    }
    getItemList(Restaurant : Restaurant) : Array<Item>{
        let x = [];
        for(let i of this.__selectedItems){
            if(i.restaurant==Restaurant){
                x.push(i);
            }
        }
        return x;
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
