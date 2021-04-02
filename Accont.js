class Account{
    unique = 0;  
    Constructor(name,Date,Type,Password){
        this._ID = unique++;
        this._name = name;
        this._type = Type;
        this._date = Date;
        this._password = Password;
    }
    getID(){
        return this._ID;
    }
    getType(){
        return this._type;
    }
    getName(){
        return this._name;
    }
    getOpenDate(){
        return this._openDate;
    }
}