"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(name, Date, Type, Password) {
        this._ID = Account.unique++;
        this._name = name;
        this._type = Type;
        this._openDate = Date;
        this._password = Password;
    }
    Account.prototype.getID = function () {
        return this._ID;
    };
    Account.prototype.getType = function () {
        return this._type;
    };
    Account.prototype.getName = function () {
        return this._name;
    };
    Account.prototype.getOpenDate = function () {
        return this._openDate;
    };
    Account.unique = 0;
    return Account;
}());
exports.Account = Account;
