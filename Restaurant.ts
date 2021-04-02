import {Account} from "./Account"
import {AccountType} from "./Enum"
import {Menu} from "./Menu"
import {Management} from "./Management"
export class Restaurant extends Account{
    orderlist = [];
    private __agent = [];
    private __agentStatus = [];
    accetanceStatus = false;
    Menu = new Menu();
    certi = [];


    constructor(name,password) {
        super(name,new Date(),AccountType.Restaurant,password);
        Management.Application.push(this);
    }
    
}