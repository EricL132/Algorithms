/* Given the head of a singly linked list, return true if it is a palindrome.

 

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 

Constraints:

The number of nodes in the list is in the range [1, 105].
0 <= Node.val <= 9 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let arr = []
    
     while(head){
         arr.push(head.val)
         head = head.next
     }   
    
   let front = 0,back =arr.length-1;
    while(front<back){
        if(arr[front]===arr[back]){
            front++
            back--
        }else{
            return false
        }
    }
    
    
   // let n = Array.from(arr).reverse()
   // return n.every((item,i)=>item===arr[i])
    
    return true
    
};

 function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
 }

 let la = new ListNode(1)
 la.next = new ListNode(2)
 la.next.next = new ListNode(2)
 la.next.next.next = new ListNode(1)

 console.log(isPalindrome(la))