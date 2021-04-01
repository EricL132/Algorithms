/* Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [2,1]
Example 5:


Input: root = [1,null,2]
Output: [1,2] */

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
    inorderTraversal = function(root) {
        if(!root) return []
        let result = []
        let trav = (root)=>{
            if(root.left){
                trav(root.left)
            }
            result.push(root.data)
            if(root.right){
                trav(root.right)
            }
        }
        trav(root)
        return  result
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
console.log(BST.inorderTraversal(root));

