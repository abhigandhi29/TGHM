from Account import Account
import datetime
from Enum import AccountType

class Management(Account):
    Application = []
    __instance  = None
    def __init__(self,Password='admin'):
        self.station_list = []
        self.train_list =  []
        Account.__init__(self,'Management',datetime.datetime.now(),AccountType.Management,Password)
    def getInstance(self):
        if Management.__instance ==None:
            __instance = Management()
        return __instance
    
    def add_Train(self,train):
        self.train_list.append(train)
    def add_Station(self,station):
        self.station_list.append(station)
    def remove_Station(self,station):
        self.station_list.remove(station)
    def remove_Train(self,train):
        self.train_list.remove(train)
    def checkStatisticsForStation(self,s):
        pass
    def checkStatisticsForAgent(self,a):
        pass
    def getApplication(self):
        return Management.Application


