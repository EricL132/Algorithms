/*
Given an integer n and an integer start.

Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.

 

Example 1:

Input: n = 5, start = 0
Output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.
Example 2:

Input: n = 4, start = 3
Output: 8
Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.
Example 3:

Input: n = 1, start = 7
Output: 7
Example 4:

Input: n = 10, start = 5
Output: 2

*/
let n = 4, start = 3

var xorOperation = function(n, start) {
    var arrayNum = [];
    var result = 0;
    for(var i =0; i<n;i++){
        arrayNum.push(start+2*i)
    }
    
    for(var j = 0; j<arrayNum.length;j++){
        result ^= arrayNum[j]
    }
    return result
};

console.log(xorOperation(n,start))