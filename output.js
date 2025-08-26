//136. Single Number
/*
const nums = [4,1,2,1,2];
const counts = new Map();
for (const num of nums) counts.set(num, (counts.get(num) ?? 0) + 1);
for (const [num, count] of counts) if (count === 1) console.log(num);

let ans = 0;
for(const x of nums){
    ans ^= x;
}
console.log(ans)


//325. Maximum Size Subarray Sum Equals k

function logestSubarraySumNegativePostive(arr,k){
    const n = arr.length;
    let maxLen = 0;
    let results = [];

    for(let i=0; i<n; i++){
        let sum =0;
        let temp = [];
        for(let j=i; j<n; j++){
            sum+=arr[j];
            temp.push(arr[j]);
            if(sum==k){
                maxLen = Math.max(maxLen,j-i+1)
                results.push(temp)
            }
        }
    }
    return {maxLen,results};
}

let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
let K = 6;
console.log(logestSubarraySumNegativePostive(arr, K));


function longestSubarrayPositive(arr, k) {
    const n = arr.length;
    let sum = 0;
    let maxLen = 0;
    let i = 0;

    for (let j = 0; j < n; j++) {
        sum += arr[j];

        // shrink window if sum > k
        while (sum > k && i <= j) {
            sum -= arr[i];
            i++;
        }

        // check again after shrinking
        if (sum === k) {
            maxLen = Math.max(maxLen, j - i + 1);
        }
    }
    return maxLen;
}

// Example
console.log(longestSubarrayPositive([1,2,3,1,1,1,1,4,2,3], 6)); // Output: 4


// 560. subarray sum equal to k

function subarraySum (arr,k){
    const map = new Map();
    let count =0, sum =0;
    map.set(0,1)
    for(let item of arr){
        sum+=item;
        if(map.has(sum-k)){
            count+=map.get(sum-k)
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;

}
const nums = [1,2,3], k = 3;
console.log(subarraySum(nums,k));
*
var sortColors = function (nums) {
    let n = nums.length; // Get the length of the array
    let i = 0, // Pointer for 0s
      j = 0, // Current pointer
      k = n - 1; // Pointer for 2s
    // Process the array until the current pointer crosses the pointer for 2s
    while (j <= k) {
      if (nums[j] === 1) {
        // If the current element is 1, just move to the next element
        j++;
      } else if (nums[j] === 2) {
        // If the current element is 2, swap it with the element at the pointer for 2s
        [nums[j], nums[k]] = [nums[k], nums[j]];
        k--; // Move the pointer for 2s one step left
      } else if (nums[j] === 0) {
        // If the current element is 0, swap it with the element at the pointer for 0s
        [nums[j], nums[i]] = [nums[i], nums[j]];
        i++; // Move the pointer for 0s one step right
        j++; // Move the current pointer to the next element
      }
    }
    return nums; // Return the sorted array
  };
  const nums = [2, 0, 2, 1, 1, 0];
  console.log(sortColors(nums)); // Output: [0, 0, 1, 1, 2, 2]
  */


  // 53. Maximum Subarray
  var maxSubArray = function(nums) {
    /*
    const n = nums.length;
    let sum = -Infinity;
    for(let i=0; i<n; i++){
        let subsum = 0;
        let subarr = [];
        for(let j=i; j<n; j++){
            subsum+=nums[j];
            subarr.push(nums[j]);
        if(subsum>sum){
            sum = subsum;
        }
        console.log(subarr)
        }
    }
    return sum;
    */
    let currSum = -Infinity, maxSum = -Infinity;
    for(const num of nums){
        currSum = Math.max(num,currSum+num)
        maxSum = Math.max(currSum,maxSum)
    }
    return maxSum;
};
const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
