/* Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
Example 3:

Input: root = []
Output: 0
Example 4:

Input: root = [0]
Output: 1 */

class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root=null
    }

    insert(data){
        const node = new Node(data)
        if(this.root===null){
            this.root = node
            
        }else{
            this.insertNode(this.root,node)
            
        }
    }

    insertNode(currentRoot,node){
        if(node.data<currentRoot.data){
            if(currentRoot.left===null){
                currentRoot.left = node
            }else{
                this.insertNode(currentRoot.left,node)
            }
        }else{
            if(currentRoot.right===null){
                currentRoot.right = node
            }else{
                this.insertNode(currentRoot.right,node)
            }
        }
    }
    maxDepth = function(root) {
        if(!root) return [];
        return Math.max(this.maxDepth(root.left), this.maxDepth(root.right)) + 1;
    
    };

    getRootNode(){
        return this.root
    }

}

let BST = new BinaryTree()
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);


var root = BST.getRootNode();
console.log(root)
console.log(BST.maxDepth(root));