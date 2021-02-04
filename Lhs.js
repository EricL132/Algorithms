
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