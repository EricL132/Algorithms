/* Given an array of integers A, return the largest integer that only occurs once.

If no integer occurs once, return -1.

 

Example 1:

Input: [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: 
The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it's the answer.
Example 2:

Input: [9,9,8,8]
Output: -1
Explanation: 
There is no number that occurs only once.
 

Note:

1 <= A.length <= 2000
0 <= A[i] <= 1000 */

/**
 * @param {number[]} A
 * @return {number}
 */
 var largestUniqueNumber = function(A) {
    
    /*  A.sort((a,b)=>a-b)
      for(var i =A.length-1;i>=0;i--){
          if(A.length===1) return A[0]
          const larg = A.pop()
          if(!A.includes(larg)){
              return A.length>0 ?larg:-1
          }else{
              while(A.includes(larg)){
                  A.pop()
              }
          }
      }*/
      
      let map = new Map()
      let largest = -Infinity
      for(let n of A){
          map.get(n) ? map.set(n,map.get(n)+1) : map.set(n,1)
      }
      
      map.forEach((item,i)=>{
          if(item===1&&largest<i) largest=i
      })
      
      return largest!==-Infinity ? largest : -1
  };

  console.log(largestUniqueNumber([5,7,3,9,4,9,8,3,1]))