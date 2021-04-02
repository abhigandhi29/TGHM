import enum

class Status(enum.Enum):
    Not_Complete = 0
    Payment_Done = 1
    Request_Pending = 2
    Accepted = 3
    Cooking = 4
    On_Way = 5
    Delivered = 6

class AccountType(enum.Enum):
    Customer = 0
    Management = 2
    Restaurant = 3
    Agent = 4