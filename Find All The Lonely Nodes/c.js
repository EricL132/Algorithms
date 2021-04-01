/* In a binary tree, a lonely node is a node that is the only child of its parent node. The root of the tree is not lonely because it does not have a parent node.

Given the root of a binary tree, return an array containing the values of all lonely nodes in the tree. Return the list in any order.

 

Example 1:


Input: root = [1,2,3,null,4]
Output: [4]
Explanation: Light blue node is the only lonely node.
Node 1 is the root and is not lonely.
Nodes 2 and 3 have the same parent and are not lonely.
Example 2:


Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2]
Output: [6,2]
Explanation: Light blue nodes are lonely nodes.
Please remember that order doesn't matter, [2,6] is also an acceptable answer.
Example 3:



Input: root = [11,99,88,77,null,null,66,55,null,null,44,33,null,null,22]
Output: [77,55,33,66,44,22]
Explanation: Nodes 99 and 88 share the same parent. Node 11 is the root.
All other nodes are lonely.
Example 4:

Input: root = [197]
Output: []
Example 5:

Input: root = [31,null,78,null,28]
Output: [78,28]
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
Each node's value is between [1, 10^6]. */
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
   getLonelyNodes = function(root) {
        let result = []
        let trav = (root)=>{
            if(!root) return;
            trav(root.left)
            trav(root.right)
            if(!root.left && root.right){
                result.push(root.right.data)
            }
            if(!root.right && root.left){
                result.push(root.left.data)
            }
    
        }
        trav(root)
        return result
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
BST.insert(33);

var root = BST.getRootNode();
console.log(root)
console.log(BST.getLonelyNodes(root));


