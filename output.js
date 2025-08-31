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
  *


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
    *
    let currSum = -Infinity, maxSum = -Infinity;
    for(const num of nums){
        currSum = Math.max(num,currSum+num)
        maxSum = Math.max(currSum,maxSum)
    }
    return maxSum;
};
const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
*
var spiralOrder = function(matrix) {
    let top = 0, left = 0;
    let down = matrix.length-1, right = matrix[0].length-1;
    let dir = 0;
    const result = [];
    while(top <=down && left <=right){
        if(dir === 0){
            for(let i=left; i<=right; i++){
                result.push(matrix[top][i])
            }
            top++;
        }else if(dir === 1){
            for(let i=top; i<=down; i++){
                result.push(matrix[i][right])
            }
            right--;
        }else if(dir === 2){
            for(let i=right; i>= left; i--){
                result.push(matrix[down][i])
            }
            down--;
        }else if(dir === 3){
            for(let i=down; i>=top; i--){
                result.push(matrix[i][left])
            }
            left++;
        }
        dir = (dir+1)%4;
    }
    return result;
};
const matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(spiralOrder(matrix));

*
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const myMap = new Map();
    for(const ch of s) myMap.set(ch,(myMap.get(ch) || 0)+1);
    for(const ch of t){
        if(!myMap.has(ch)) return false;
        myMap.set(ch,myMap.get(ch)-1)
        if(myMap.get(ch) < 0){
            return false;
        }
    }
    return true;
};
const s = "anagram", t = "nagaram";
console.log(isAnagram(s,t));
*
var groupAnagrams = function(strs) {
    const myMap = new Map();
    for(const str of strs){
        const key = str.split("").sort().join("");
        if(!myMap.has(key)){
            myMap.set(key,[])
        }
        myMap.get(key).push(str);
    }
    return [...myMap.values()]
};
const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));

let hashMap = {};
for(let str of strs){
    let freq = new Array(26).fill(0);
    for(let char of str){
        freq[char.charCodeAt(0)-'a'.charCodeAt(0)]++
    }
    let key = freq.join(',');
    if(!hashMap[key]){
        hashMap[key] = [] 
    }
    hashMap[key].push(str)
}
console.log(Object.values(hashMap))
*/

/*
var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    let prefix = 1;
    for(let i = 0; i < n; i++){
        result[i] = prefix;
        prefix *= nums[i];
        console.log(result)
    }
    let suffix = 1;
    for(let i = n - 1; i >= 0; i--){
        result[i] *= suffix;
        suffix *= nums[i];
        console.log(result)
    }

    return result;
};
const nums = [1,2,3,4];
console.log(productExceptSelf(nums));
*/


/*
var productExceptSelf = function(nums) {
    const n = nums.length;
    let product = 1;
    let zeroCount = 0;
    const result = [];
    for(const num of nums){
        if(num === 0){
            zeroCount++;
        }else{
            product *= num;
        }
    }
    for(const num of nums){
        if(zeroCount > 1){
            result.push(0)
        }else if(zeroCount === 1){
            result.push(num === 0 ? product : 0)
        }else{
            result.push(product/num)
        }
    }
    return result;
}

console.log(productExceptSelf([1,2,3,4,0,0]))
var maxArea = function(height) {
    let area = 0;
    /*
    for(let i=0; i<height.length; i++){
        for(let j=i+1; j<height.length; j++){
            const diff = j-i;
            let total = 0;
            if(height[i]> height[j]){
                total = diff * height[j]
            }else{
                total = diff * height[i]
            }
            if(total> area){
                area = total;
            }
        }
    }
    return area;
    */
   /*
    let i=0; j=height.length-1;
    while(i<j){
        const diff = j-i;
        let total = 0;
        if(height[i]<height[j]){
            total = diff * height[i];
            i++;
        }else{
            total = diff* height[j];
            j--;
        }
        if(total > area){
            area = total;
        }
    }
    return area;
};
const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));
*/

// custom stack
/*
class Stack {
    constructor(){
        this.items = [];
    }
    push(item){
        this.items[this.items.length] = item;
    }
    pop(){
        if(this.items.length === 0){
            return null;
        }
        const item = this.items[this.items.length-1];
        this.items.length--;
        return item;
    }
    peek(){
        if(this.items.length === 0){
            return null;
        }
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.items);
console.log(stack.peek());
stack.pop();
console.log(stack.items);
console.log(stack.isEmpty());
console.log(stack.size());

*/