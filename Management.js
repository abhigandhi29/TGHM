class Maanagement{
    instance = null;
    Application = []
    constructor(){
        this.stationList = [];
        this.trainList = [];
    }
    getInsstance(){
        if (instance==null){
            instance = new Maanagement();
        }
        return instance;
    }
    addStation(Station){
        this.stationList.push(Station);
    }
    removeStation(Station){
        this.stationList.splice(this.stationList.indexOf(Station));
    }
    addTrain(Train){
        this.trainList.push(Train);
    }
    removeTrain(Train){
        this.trainList.slice(this.trainList.indexOf(Train));
    }

}