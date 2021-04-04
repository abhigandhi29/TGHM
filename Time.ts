export class Time{
    min : number=0;
    hour : number=0;
    constructor(hour : number=0, min:number=0 ){
        this.min = min;
        this.hour = hour;
    }
    checkValidity(){
    }
    static currentTime(date : Date){
        let t = new Time(+date.getHours,+date.getMinutes);
        return t;
    }
    updateTime(){
        let date  = new Date();
        this.min = date.getMinutes();
        this.hour = date.getHours();
    }  
}