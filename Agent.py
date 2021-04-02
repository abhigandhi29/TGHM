from Location import Location
from Account import Account
import datetime

class Agent(Account):
    def __init__(self,name,Password):
        Account.__init__(self,name,datetime.datetime.now(),'Agent',Password)
        self.__Location = Location()
        self.__Alloted_Order = None
    def update_location(self):
        pass
    def return_location(self):
        return self.__Location
    def update_alloted_order(self,order):
        self.__Alloted_Order = order