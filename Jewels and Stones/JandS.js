/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
*/
let jewels = "aA", stones = "aAAbbbb"
var numJewelsInStones = function(J, S) {
    var result = 0;
    for(var j =0 ; j<J.length;j++){
        var stone = J[j]

        for(var i =0; i<S.length;i++){

            if(S[i]==stone){
                result++;
            }
        }
    }
    return result;
};

console.log(numJewelsInStones(jewels,stones))