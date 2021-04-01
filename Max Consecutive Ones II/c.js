/* Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.

Example 1:
Input: [1,0,1,1,0]
Output: 4
Explanation: Flip the first zero will get the the maximum number of consecutive 1s.
    After flipping, the maximum number of consecutive 1s is 4.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
Follow up:
What if the input numbers come in one by one as an infinite stream? In other words, you can't store all numbers coming from the stream as it's too large to hold in memory. Could you solve it efficiently? */

var findMaxConsecutiveOnes = function(nums) {
    let largest = 0;
   
    if(nums.includes(0)){
    for(var i =0;i<nums.length;i++){
        let current = 0;
        if(nums[i]===0){
            nums[i]=1
            for(var j=0;j<nums.length;j++){
                if(nums[j]===1){
                    current++;
                    if(current>largest){
                        largest=current
                    }
                }else{
                    current=0
                }
            }
            nums[i]=0
        }
    }
    }else{
        largest=nums.length
    }
    return largest
};


console.log(findMaxConsecutiveOnes([1,0,1,1,0]))