import {Account} from "./Account"
import {AccountType,AgentStatus,ApprovalStatus,FoodType} from "./Enum"
import {Menu} from "./Menu"
import {Management} from "./Management"
import {Item} from "./Item"
import {Agent} from "./Agent"
import {Certi} from "./Certificate"
import {Station} from "./Station"
import {Order} from "./Order"
import {System} from "./System"
import { Time } from "./Time"

export class Restaurant extends Account{
    orderlist : Array<Order> = [];
    private __timeToReach : Array<Time> = [];
    private __agent : Array<number> = [];
    private __agentStatus: Array<AgentStatus> = [];
    private __agentTimeToGetBack : Array<number> = [];
    accetanceStatus = ApprovalStatus[0];
    Menu = new Menu();
    certi: Array<Certi> = [];
    servingStation : Array<number> = [];
    
    constructor(name:string,username:string,password:string) {
        super(name,username,new Date(),AccountType.Restaurant,password);
        Management.Application.push(this);
        //this.__timeToReach = timeToReach;

    }
    getPrice(s : string){
        return this.Menu.getPrice(s);
    }
    addItem(s : string , price : number, type:number){
        let item = new Item(s, price, type, this.getID());
        this.Menu.addItem(item);
        for(let i of this.servingStation){
            Management.stationList[i].addItem(item);
        }
    }
    provideCerti(file : Certi){
        this.certi.push(file);
    }
    AddAgent(agent : Agent){
        this.__agent.push(agent.getID());
        this.__agentStatus.push(AgentStatus.Available);
        this.__agentTimeToGetBack.push(0);
        System.active_agent.push(agent);
        agent.addRestaurant(this);
    }
    removeAgent(agent : Agent){
        let index = this.__agent.indexOf(agent.getID());
        this.__agent.slice(index);
        this.__agentTimeToGetBack.slice(index);
        this.__agentStatus.splice(index);
        System.active_agent.slice(System.active_agent.indexOf(agent));
    }

    getClosestAgent(){
        return Math.min.apply(Math,this.__agentTimeToGetBack);   
    }
    allotAgent(order: Order,time : number){
        if(time < this.getClosestAgent()){
            let index = this.__agentTimeToGetBack.indexOf(this.getClosestAgent());
            Management.agentList[this.__agent[index]].updateAllotedOrder(order);
            this.__agentTimeToGetBack[index]  = ((+time) +(+this.__timeToReach));
        }        
    }
    updateOrderStatus(orderId : number,status : number, Item : Item){
        for(let i of this.orderlist){
            if(i.orderId ==orderId){
                i.updateOrderStatus(status,Item);
            }
        }
    }
    addStation(Station : Station, time:Time){
        Station.addRestaurant(this);
        this.__timeToReach.push(time);
        for(let i of this.Menu.getMenuItems()){
            Station.addItem(i);
        }
    }
    getOrderDetails(orderId : number){
        for(let i of this.orderlist){
            if(i.orderId ==orderId){
                return i.getItemList(this);
            }
        }
    }


}