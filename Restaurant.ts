import {Account} from "./Account"
import {AccountType,AgentStatus} from "./Enum"
import {Menu} from "./Menu"
import {Management} from "./Management"
import { Item } from "./Item"
import {Agent} from "./Agent"
import {Certi} from "./Certificate"
export class Restaurant extends Account{
    orderlist = [];
    private __agent : Array<Agent>;
    private __agentStatus = [];
    private __agentTimeToGetBack : Array<number>;
    accetanceStatus = false;
    Menu = new Menu();
    certi = [];
    servingStation : Array<Station>;

    constructor(name,password) {
        super(name,new Date(),AccountType.Restaurant,password);
        Management.Application.push(this);
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
    provideCerti(file){
    
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
    allotagent(agent : Agent){

    }
    getClosestAgent(){
        return Math.min.apply(Math,this.__agentTimeToGetBack);   
    }
    allotAgent(order){

    }
    updateOrderStatus(orderId,status){

    }


}