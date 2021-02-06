/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

 

Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
Example 3:

Input: s = "MerryChristmas"
Output: false
*/
let s = "book"
var halvesAreAlike = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let strin = [s.substr(0,s.length/2),s.substr(s.length/2,s.length)]
    let numVowelsA= 0;
    let numVowelsB=0;
    for(var i=0;i<2;i++){
        for(var k=0;k<strin[i].length;k++){
            for(var j=0;j<vowels.length;j++){
                if(i==0){
                    if(strin[i].charAt(k)==vowels[j]){
                    numVowelsA++;
                    }
                }else{
                    if(i==1){
                        if(strin[i].charAt(k)==vowels[j]){
                            numVowelsB++;
                        }
                    }
                }
            }
                
        }
        
        
    }
    
    if(numVowelsA==numVowelsB){
        return true
    }else{
        return false
    }
}


console.log(halvesAreAlike(s))