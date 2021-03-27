from Account import Account
from Management import Management
from Menu import Menu
import datetime

class Restaurantt(Account):
    def __init__(self,name,Password):
        date = datetime.datetime.now()
        Account.__init__(self,name,date,'Restaurant',Password)
        self.orderList = []
        self.__agent= []
        self.__agent_status = []
        self.Acceptance_status  = False
        self.Menu = Menu()
        self.certi = None
        Management.Application.append(self)
    def Return_Price(self,s):
        return self.Menu.return_price(s)
    def add_Item(self,s,value):
        self.Menu.add_Item(s,value)
    def ProvideCerti(self,certi):
        self.certi  = certi
    


