/* Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

// Solution

var topKFrequent = function (nums, k) {
  // let obj = {};
  // for(let i=0; i<nums.length; i++){
  //     obj[nums[i]] = (obj[nums[i]] || 0) +1;
  // }
  // let result = []
  // for(let key in obj){
  //     result.push([Number(key),obj[key]])
  // }
  // result.sort((a,b)=>b[1]-a[1])
  // return result.slice(0,k).map((el)=>el[0])
  // console.log(result)
  const map = new Map();
  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }
  //   console.log(map);
  const result = [];
  for (let [key, value] of map) {
    result.push([key, value]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.slice(0, k).map((x) => x[0]);
};

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;

console.log(topKFrequent(nums, k));
