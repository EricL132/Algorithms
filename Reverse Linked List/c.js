/* Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head) return null;
    let arr = []
    while(head!=null){
        arr.push(head.val)
        head = head.next
    }
    arr.reverse() 
    let res = null
    for(var i=arr.length-1;i>=0;i--){
        res = {val:arr[i],next:res}
    }
    return res
};


function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}


let li = new ListNode(1)
li.next = new ListNode(2)
console.log(reverseList(li))


