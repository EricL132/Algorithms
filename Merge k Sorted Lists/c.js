/* You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
 

Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4. */
function ListNode(val,next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeKLists = function(lists) {
    if(lists.length===0) return null;
    let result = [];
    for(let i =0;i<lists.length;i++){
        result = toFlat(lists[i], result)
    }
    result.sort((a,b) => a - b)

    let resultOb = null
    for (let i = result.length-1; i >= 0; i--) {
        resultOb = {val: result[i], next: resultOb}
    }
    return resultOb

};

let toFlat = (l, arr = []) => {
    while (l!=null) {
        arr.push(l.val)
        l = l.next
    }
    return arr
}

const f = new ListNode(1)
f.next = new ListNode(4)
f.next.next = new ListNode(5)

const d = new ListNode(1)
d.next = new ListNode(3)
d.next.next = new ListNode(4)

const s = new ListNode(2)
s.next = new ListNode(6)


console.log(mergeKLists([f,d,s]))
