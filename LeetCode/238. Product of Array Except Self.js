/* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/

var productExceptSelf = function (nums) {
  //  const n = nums.length;
  //  const result = new Array(n).fill(0);

  //  tp = 1;
  //  zc = 0;
  //  for(let i=0; i<n; i++){
  //     if(nums[i]===0){
  //         zc++
  //     }else{
  //         tp*=nums[i]
  //     }
  //  }
  //  if(zc>1){
  //     return result;
  //  }else if(zc === 1){
  //     for(let i=0; i<n; i++){
  //         if(nums[i]===0){
  //             result[i] = tp
  //         }
  //     }
  //  }else{
  //     for(let i=0; i<n; i++){
  //         result[i] = tp/nums[i]
  //     }
  //  }
  //  return result;
  const n = nums.length;
  const left = new Array(n);
  const right = new Array(n);
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  // console.log(left)
  // console.log(right)
  let result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }
  return result;
};

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
