class Node:
    def __init__(self,val =None):
        self.val = val
        self.next = None

class SLink:
    def __init__(self):
        self.head = None
    def insert(self,val):
        newNode = Node(val)
        if self.head ==None:
            self.head = newNode
            return
        lastNode = self.head
        while lastNode.next:
            lastNode = lastNode.next
        lastNode.next = newNode
    def insertAtFront(self,val):
        newNode = Node(val)
        old = self.head
        self.head = newNode
        self.head.next = old
    def insertAtIndex(self,val,index):
        newNode = Node(val)
        current = self.head
        for i in range(index-1):
            current = current.next
        newNode.next = current.next
        current.next = newNode
    def printList(self):
        list = self.head
        while list:
            print(list.val)
            list = list.next
    def remove(self,val):
        list = self.head
        while list:
            if list.val == val:
                break
            prev = list
            list = list.next
        prev.next = list.next
l = SLink()
l.insert("a")
l.insert("b")
l.insert("c")
l.insertAtFront("bv")
l.insertAtIndex("lb",1)
l.remove("a")
l.printList()

# print(l.head.val)
# print(l.head.next.val)