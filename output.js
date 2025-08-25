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
*/

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