import {Account} from "./Account"
import {AccountType,AgentStatus} from "./Enum"
import {Menu} from "./Menu"
import {Management} from "./Management"
import {Item} from "./Item"
import {Agent} from "./Agent"
import {Certi} from "./Certificate"
import {Station} from "./Station"
import {Order} from "./Order"

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
    addItem(s : string , price : number){
        let item = new Item(s, price);
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
    }
    removeAgent(agent : Agent){
        let index = this.__agent.indexOf(agent);
        this.__agent.slice(index);
        this.__agentTimeToGetBack.slice(index);
        this.__agentStatus.splice(index);
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
    updateOrderStatus(orderId : number,status : number){
        for(let i of this.orderlist){
            if(i.orderId ==orderId){
                i.updateOrderStatus(status);
            }
        }
    }
}