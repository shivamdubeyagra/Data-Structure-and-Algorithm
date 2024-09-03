/**
 * Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000
 */

var pivotIndex = function (nums) {
  // Calculate the total sum of the array
  const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;
  // Loop through the array to find the pivot index
  for (let i = 0; i < nums.length; i++) {
    // Calculate the right sum by subtracting left sum and
    // the current element from total sum
    let rightSum = totalSum - leftSum - nums[i];
    // If left sum equals right sum, return the current index
    if (rightSum === leftSum) {
      return i;
    }
    // Update the left sum with the current element
    leftSum += nums[i];
  }
  // If no pivot index is found, return -1
  return -1;
};
const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums)); // Output: 3
