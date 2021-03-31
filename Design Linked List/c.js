/* Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 

Example 1:

Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]

Explanation
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3 */


var MyLinkedList = function() {
    this.size = 0 
    this.head = {
        next:null
    }

 this.get = function(index,getNode) {
 if(index<0 || index>=this.size){
     return -1
 }else if(index===0){
     return getNode ? this.head :this.head.val
 }
 let counter = 0;
 let current = this.head
 while(counter!==index){
     current=current.next
     counter++
 }
 return getNode ? current : current.val
};
 
 this.addAtHead = function(val) {
 var node = {
     val,
     next:this.head
 }
 this.head = node
 this.size++;
};
 this.addAtTail = function(val) {
 const node = {
     val,
     next:null
 }
 if(this.size===0){
     this.head = node
 }
 
 const lastNode = this.get(this.size-1,true)
 lastNode.next = node
 this.size++;
};
 this.addAtIndex = function(index, val) {
 if(index===this.size){
     this.addAtTail(val)
     return
 }else if(index===0){
     this.addAtHead(val)
     return
 }else if(index<0 || index>=this.size){
     return
 }
 const previous = this.get(index-1,true)
 const node = {
     val,
     next: previous.next
 }
 previous.next = node
 this.size++
};
 this.deleteAtIndex = function(index) {
 if(index<0 || index>=this.size) return;
 if(index===0){
     this.head = this.head.next
 }else{
     const prev = this.get(index-1,true)
     const current = prev.next
     prev.next = current.next
 }
 this.size--
};
};


let myLinkedList = new MyLinkedList();
console.log(myLinkedList.addAtHead(1));
console.log(myLinkedList.addAtTail(3));
console.log(myLinkedList.addAtIndex(1, 2));    // linked list becomes 1->2->3
console.log(myLinkedList.get(1));              // return 2
console.log(myLinkedList.deleteAtIndex(1));    // now the linked list is 1->3
console.log(myLinkedList.get(1));              // return 3 */
