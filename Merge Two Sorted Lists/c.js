/* You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros. */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    if(l1==null) return l2
    if(l2==null) return l1
    let arr = []
    while(l1?.val!=null || l2?.val!=null){
        if(l1) arr.push(l1.val)
        if(l2) arr.push(l2.val)
         l1 = l1?.next
         l2 = l2?.next
    }
    arr.sort((a,b)=>a-b)
    let res = null
    for(var i =arr.length-1;i>=0;i--){
        res = {val:arr[i],next:res}
    }

return res
    
};


function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
    }

    let l1 = new ListNode(1)
    l1.next = new ListNode(2)
    l1.next.next = new ListNode(4)

    let l2 = new ListNode(1)
    l2.next = new ListNode(3)
    l2.next.next = new ListNode(4)


    console.log(mergeTwoLists(l1,l2))