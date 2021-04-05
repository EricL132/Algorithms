/* Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
 

Constraints:

1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both num1 and num2 do not contain any leading zero, except the number 0 itself. */

var multiply = function(num1, num2) {
    if(num1==0 || num2==0) return "0"
    let n1 = num1.length, n2= num2.length, res = Array(n1+n2).fill(0);
    for(var i = n1-1; i>=0;i--){
        for(var j=n2-1;j>=0;j--){
            const p1 = i+j, p2 = i+j+1
            const sum = res[p2]+ Number(num1[i])*Number(num2[j])
            res[p1] += Math.floor(sum/10)
            res[p2] = sum%10
        }
    }
    
    if(res[0]===0) res.shift()
    return res.join("")
};


console.log(multiply("123","456"))