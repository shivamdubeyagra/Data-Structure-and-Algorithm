/**
 * 
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
 */

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
