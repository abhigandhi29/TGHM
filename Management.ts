class Maanagement{
    instance = null;
    static Application = []
    stationList = [];
    trainList = [];
    private constructor(){
    }
    getInsstance(){
        if (this.instance==null){
            this.instance = new Maanagement();
        }
        return this.instance;
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