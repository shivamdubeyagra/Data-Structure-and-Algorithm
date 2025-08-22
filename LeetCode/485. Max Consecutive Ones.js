var findMaxConsecutiveOnes = function(nums) {
    /*
    let maxc= 0;
    let arr = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
            arr.push(maxc)
            maxc=0;
        }else{
            maxc++;
        }
        
    }
    arr.push(maxc)
    return Math.max(...arr)
    */
    let max=0, curr =0;
    for(let num of nums){
        if(num === 1){
            curr++;
            max = Math.max(max,curr)
        }else{
            curr = 0;
        }
    }
    return max;
};
const nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums));