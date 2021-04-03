import {Account} from "./Account"
import {AccountType,AgentStatus,FoodType} from "./Enum"
import {Menu} from "./Menu"
import {Management} from "./Management"
import {Item} from "./Item"
import {Agent} from "./Agent"
import {Certi} from "./Certificate"
import {Station} from "./Station"
import {Order} from "./Order"
import {System} from "./System"

export class Restaurant extends Account{
    orderlist : Array<Order>;
    private __timeToReach : number;
    private __agent : Array<Agent>;
    private __agentStatus = [];
    private __agentTimeToGetBack : Array<number>;
    accetanceStatus = false;
    Menu = new Menu();
    certi = [];
    servingStation : Array<Station>;

    constructor(name,password,timeToReach : number) {
        super(name,new Date(),AccountType.Restaurant,password);
        Management.Application.push(this);
        this.__timeToReach = timeToReach;

    }
    getPrice(s : string){
        return this.Menu.getPrice(s);
    }
    addItem(s : string , price : number, type:number){
        let item = new Item(s, price, type, this);
        this.Menu.addItem(item);
        for(let i of this.servingStation){
            i.addItem(item);
        }
    }
    provideCerti(file : Certi){
        this.certi.push(file);
    }
    AddAgent(agent : Agent){
        this.__agent.push(agent);
        this.__agentStatus.push(AgentStatus.Awailable);
        this.__agentTimeToGetBack.push(0);
        System.active_agent.push(Agent);
        agent.addRestaurant(this);
    }
    removeAgent(agent : Agent){
        let index = this.__agent.indexOf(agent);
        this.__agent.slice(index);
        this.__agentTimeToGetBack.slice(index);
        this.__agentStatus.splice(index);
        System.active_agent.slice(System.active_agent.indexOf(Agent));
    }

    getClosestAgent(){
        return Math.min.apply(Math,this.__agentTimeToGetBack);   
    }
    allotAgent(order,time : number){
        if(time < this.getClosestAgent()){
            let index = this.__agentTimeToGetBack.indexOf(this.getClosestAgent());
            this.__agent[index].updateAllotedOrder(order);
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
    addStation(Station : Station){
        Station.addRestaurant(this);
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