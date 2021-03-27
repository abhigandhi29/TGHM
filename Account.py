

class Account:
    unique =0
    def __init__(self,name,Date,Type,Password):
        Account.unique+=1
        self.__name = name
        self.__Opened = Date
        self.__ID = Account.unique
        self._type = Type
        self.__password = Password
    def getID(self):
        return self.__ID
    def getName(self):
        return self.__name
    def getType(self):
        return self._type
    def getgetOpenDate(self):
        return self.__Opened
    


