/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

let nums = [2,3,3,5,7,5,7,45,3]

var findDuplicates = function(nums) {
    var result = []; 
    var count =0;
    for(var i=0;i<nums.length;i++){
        count = countInArray(nums,nums[i])
        if(count>1 && !result.includes(nums[i])){
            result.push(nums[i])
        }
        count = 0;
    }
    return result
};
    
    
function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
}

console.log(findDuplicates(nums))