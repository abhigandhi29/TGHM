"use strict";
exports.__esModule = true;
exports.AccountType = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Not_Complete"] = 0] = "Not_Complete";
    OrderStatus[OrderStatus["Payment_Done"] = 1] = "Payment_Done";
    OrderStatus[OrderStatus["Request_Pending"] = 2] = "Request_Pending";
    OrderStatus[OrderStatus["Accepted"] = 3] = "Accepted";
    OrderStatus[OrderStatus["Cooking"] = 4] = "Cooking";
    OrderStatus[OrderStatus["On_Way"] = 5] = "On_Way";
    OrderStatus[OrderStatus["Delivered"] = 6] = "Delivered";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var AccountType;
(function (AccountType) {
    AccountType[AccountType["Customer"] = 0] = "Customer";
    AccountType[AccountType["Management"] = 2] = "Management";
    AccountType[AccountType["Restaurant"] = 3] = "Restaurant";
    AccountType[AccountType["Agent"] = 4] = "Agent";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
