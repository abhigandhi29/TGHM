export enum OrderStatus{
    Not_Complete = 0,
    Payment_Done = 1,
    Request_Pending = 2,
    Accepted = 3,
    Cooking = 4,
    On_Way = 5,
    Delivered = 6
}
export enum AccountType{
    Customer = 0,
    Management = 2,
    Restaurant = 3,
    Agent = 4
}
export enum AgentStatus{
    Awailable = 0,
    On_Order = 1
}