
/*
We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

 

Example 1:

Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
Example 2:

Input: nums = [1,2,3,4]
Output: 2
Example 3:

Input: nums = [1,1,1,1]
Output: 0
*/
let nums = [1,2,3,4]

var findLHS = function(nums) {
    let hash = {}
    let lhs = 0;
    for(var i=0;i<nums.length;i++){
        if(!(nums[i] in hash)){
            hash[nums[i]]=0;
        }
        hash[nums[i]]++
    }
    
    let keys = Object.keys(hash)
    for(var i=0;i<keys.length;i++){
        let key = Number(keys[i]);

        if(key+1 in hash){
            lhs = Math.max(lhs,hash[key]+hash[key+1])
        }
        
    
    }
    
    return lhs
    
};


console.log(findLHS(nums))