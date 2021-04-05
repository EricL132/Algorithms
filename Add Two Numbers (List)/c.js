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
Output: [8,9,9,9,0,0,0,1] */

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
 var addTwoNumbers = function(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1
    
    let sum = 0;
    let remain = 0;
    let temp = new ListNode()
    let l3 = temp;
    
    while(l1 || l2){
        sum = (remain+(l1?.val || 0) +(l2?.val || 0))
        remain = Math.floor(sum/10)
        sum = sum%10

        temp.next = new ListNode(sum)
        temp = temp.next
        l1 = l1?.next
        l2 = l2?.next
    }
        
        if(remain){
            temp.next = new ListNode(remain)
        }
        
       
        return l3.next
    
};


 function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
 }

 let l1 = new ListNode(2)
 l1.next = new ListNode(4)
 l1.next.next = new ListNode(3)

 let l2 = new ListNode(5)
 l2.next = new ListNode(6)
 l2.next.next = new ListNode(4)


 console.log(addTwoNumbers(l1,l2))