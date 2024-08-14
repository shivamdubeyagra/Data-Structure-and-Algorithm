/**Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Example 3:

Input: nums = [3,7]
Output: 12
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  //   let result = -Infinity;
  //   let currMax = nums[0];
  //   for(let i=1; i<nums.length; i++){
  //      let x = (nums[i]-1)*(currMax-1)
  //      if(result <x){
  //         result =x
  //      }
  //      if(currMax <nums[i]){
  //         currMax = nums[i]
  //      }
  //   }
  //   return result;
  let largest = -Infinity;
  let second_largest = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (largest < nums[i]) {
      second_largest = largest;
      largest = nums[i];
    } else {
      if (second_largest < nums[i]) {
        second_largest = nums[i];
      }
    }
  }
  return (largest - 1) * (second_largest - 1);
};
