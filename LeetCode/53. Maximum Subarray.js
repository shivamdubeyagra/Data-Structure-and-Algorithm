var maxSubArray = function(nums) {
    /*
    const n = nums.length;
    let sum = -Infinity;
    for(let i=0; i<n; i++){
        let subsum = 0;
        for(let j=i; j<n; j++){
            subsum+=nums[j];
        if(subsum>sum){
            sum = subsum;
        }
        }
    }
    return sum;
    */
    /*
    let currSum = -Infinity, maxSum = -Infinity;
    for(const num of nums){
        currSum = Math.max(num,currSum+num)
        maxSum = Math.max(currSum,maxSum)
    }
    return maxSum;
    */
    let currSum = 0, maxSum = -Infinity;
    for(const num of nums){
        if(currSum < 0){
            currSum =0;
        }
        currSum+=num;
        maxSum= Math.max(currSum,maxSum)
    }
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
