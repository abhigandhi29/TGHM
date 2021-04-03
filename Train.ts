export class Train{
    Name:string;
    private route;
    constructor(name:string,route){
        this.Name=name;
        this.route = new Map(route);
    }
    Return_Route(){
        return this.route;
    }
}
