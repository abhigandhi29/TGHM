"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Management = void 0;
var Account_1 = require("./Account");
var Enum_1 = require("./Enum");
var Management = /** @class */ (function (_super) {
    __extends(Management, _super);
    function Management() {
        var _this = _super.call(this, "Management", new Date(), Enum_1.AccountType.Management, "admin") || this;
        _this.stationList = [];
        _this.trainList = [];
        return _this;
    }
    Management.getInstance = function () {
        if (this.instance == null) {
            this.instance = new Management();
        }
        return this.instance;
    };
    Management.prototype.addStation = function (Station) {
        this.stationList.push(Station);
    };
    Management.prototype.removeStation = function (Station) {
        this.stationList.splice(this.stationList.indexOf(Station));
    };
    Management.prototype.addTrain = function (Train) {
        this.trainList.push(Train);
    };
    Management.prototype.removeTrain = function (Train) {
        this.trainList.slice(this.trainList.indexOf(Train));
    };
    Management.instance = null;
    Management.Application = [];
    return Management;
}(Account_1.Account));
exports.Management = Management;
var m = Management.getInstance();
m.trainList = [];
console.log('h');
console.log(m.getID());
