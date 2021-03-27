from Item import Item

class Menu:
    def __init__(self):
        self.__Item = []
    def return_menu(self):
        return self.__Item
    def return_price(self,s):
        for i in self.__Item:
            if(i.name == s):
                return i.price
        return None
    def add_Item_by_obj(self,Item):
        self.__Item.append(Item)
    def add_Item(self,s,value):
        item =  Item(s,value)
        self.__Item.append(item)