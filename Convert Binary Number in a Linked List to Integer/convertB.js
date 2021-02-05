/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

 

Example 1:


Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:

Input: head = [0]
Output: 0
Example 3:

Input: head = [1]
Output: 1
Example 4:

Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880
*/


class Node{
    constructor(data){
        this.data = data
        this.right =null
        this.left = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }
insert(data){
    var newNode = new Node(data)

    if(this.root === null){
        this.root = newNode
    }else{
        this.insertData(this.root,newNode)
    }
}

insertData(node,newNode){
    if(newNode.data < node.data){
        if(node.left===null){
            node.left = newNode
        }else{
            this.insertData(node.left,newNode)
        }
    }else{
        if(newNode.data>node.data){
            if(node.right===null){
                node.right = newNode
            }else{
                this.insertData(node.right,newNode.data)
            }
        }
    }



}

getRoot(){
    return this.root;
}

}

let  BST = new BinaryTree();

BST.insert(1)
BST.insert(0)
BST.insert(1)



let rl = [1,0,1]
var getDecimalValue = function(head) {
    var j = ""
    var count = 0;
    const roll = (node)=>{
        let current = node
        while(current!=null){
            j += current.data
            current = current.next 
        }
    }
    
    roll(head)
 
    return parseInt(j,2)
    
};

console.log(getDecimalValue(rl))