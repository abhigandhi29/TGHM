from Enum import Status 

class Order:
    def __init__(self,customer,Train):
        self.__customer = customer
        self.__restaurant =  None
        self.Order_Status = Status(0)
        self.__Assigned_Agent = None
        self.__Train = Train
        self.__Delivery_Station = None
        self.__Selected_Item  = []
        self.Price = 0
    


