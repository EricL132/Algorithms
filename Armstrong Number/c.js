/* Given an integer n, return true if and only if it is an Armstrong number.

The k-digit number n is an Armstrong number if and only if the kth power of each digit sums to n.

 

Example 1:

Input: n = 153
Output: true
Explanation: 153 is a 3-digit number, and 153 = 13 + 53 + 33.
Example 2:

Input: n = 123
Output: false
Explanation: 123 is a 3-digit number, and 123 != 13 + 23 + 33 = 36. */

var isArmstrong = function(n) {
    let sum = 0;
    n = n.toString()
    for(var i =0;i<n.length;i++){
        sum += Math.pow(parseInt(n.charAt(i)),n.length)
    }
    if(parseInt(n)===sum) return true
    return false
};

console.log(isArmstrong(153))