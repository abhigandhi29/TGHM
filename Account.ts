export class Account{
    static unique = 0;  
    protected _ID;
    protected _name;
    protected _type;
    protected _openDate;
    protected _password;

    constructor(name:string,Date,Type,Password){
        this._ID = Account.unique++;
        this._name = name;
        this._type = Type;
        this._openDate = Date;
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