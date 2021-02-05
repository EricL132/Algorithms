/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"
*/
let str = "dsaDDdsadGVvcx"
var toLowerCase = function(str) {
    for(var i = 0;i<str.length;i++){
        //console.log(str.charCodeAt(i))
        if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90){
            str = str.substring(0,i)+String.fromCharCode(str.charCodeAt(i)+32)+str.substring(i+1);

        }
    }
    return str
};

console.log(toLowerCase(str))