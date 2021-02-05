/*
Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].

 

Example 1:


Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Example 2:


Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
*/
let root = [10,5,15,3,7,13,18,1,null,6], low = 7, high = 15;
class RangeBST 
{ 
    constructor() 
    { 
        // root of a binary seach tree 
        this.root = null; 
    } 
  
    insert(data) 
    { 
        // Creating a node and initailising  
        // with data  
        var newNode = new Node(data); 
                          
        // root is null then node will 
        // be added to the tree and made root. 
        if(this.root === null) 
            this.root = newNode; 
        else
      
            // find the correct position in the  
            // tree and add the node 
            this.insertNode(this.root, newNode); 
    } 
      
    // Method to insert a node in a tree 
    // it moves over the tree to find the location 
    // to insert a node with a given data  
    insertNode(node, newNode) 
    { 
        // if the data is less than the node 
        // data move left of the tree  
        if(newNode.data < node.data) 
        { 
            // if left is null insert node here 
            if(node.left === null) 
                node.left = newNode; 
            else
      
                // if left is not null recur until  
                // null is found 
                this.insertNode(node.left, newNode);  
        } 
      
        // if the data is more than the node 
        // data move right of the tree  
        else
        { 
            // if right is null insert node here 
            if(node.right === null) 
                node.right = newNode; 
            else
      
                // if right is not null recur until  
                // null is found 
                this.insertNode(node.right,newNode); 
        } 
    } 
getRootNode() 
{ 
    return this.root; 
} 
    
} 

var BST = new RangeBST();
class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
} 


var rangeSumBST = function(root, L, R) {
    let sum =0 
    const roll = (node) =>{
        
        if(node == null){
            return
        }
        
        roll(node.left)
        roll(node.right)
        
        if(node.data>=L && node.data<=R){
            sum +=node.data
        }
        
    }
    
    
    roll(root)
    
    return sum
};


  
BST.insert(10); 
BST.insert(5); 
BST.insert(15); 
BST.insert(3); 
BST.insert(7); 
BST.insert(null); 
BST.insert(18); 

console.log(rangeSumBST(BST.getRootNode(),low,high))