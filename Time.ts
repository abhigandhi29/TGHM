export class Time{
    min : number=0;
    hour : number=0;
    day : number=0;
    constructor(hour : number=0, min:number=0 ,day:number=0){
        this.min = min;
        this.hour = hour;
        this.day = day;
    }
    checkValidity(){
    }
    static currentTime(date : Date){
        let t = new Time(date.getHours(),date.getMinutes());
        return t;
    }
    updateTime(){
        let date  = new Date();
        this.min = date.getMinutes();
        this.hour = date.getHours();
        this.day = 0;
    }
    lessThanEqual(time:Time): boolean{
        // if(this.hour<=time.hour) {
        //     return true;
        // }
        //     else{
        //
        //     }
        //     if(this.min<=time.min){
        //         return true;
        //     }
        //     else{
        //         return false;
        //     }
        // }
        // return false;
        if (this.hour<time.hour) return true;
        else if (this.hour === time.hour){
            if (this.min <= time.min) return true;
            else return false;
        }
        else return false;
    }
}