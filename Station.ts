export class Station{
    name;
    private __restaurant = [];
    private __food = new Set();
    constructor(name){
        this.name = name;
    }
    addRestaurant(restaurant){
        this.__restaurant.push(restaurant);
    }
    getRestaurant(){
        return this.__restaurant;
    }
    addItem(item){
        this.__food.add(item);
    }
    getItem(){
        return Array.from(this.__food);
    }
}