class Station:
    def __init__(self,name):
        self.name  = name
        self.__Restaurant = []

    def Add_Restaurant(self,res):
        self.__Restaurant.append(res)
        
    def Get_Restaurant(self):
        return self.__Restaurant