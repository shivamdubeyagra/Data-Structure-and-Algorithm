/**Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 */

// var threeSum = function (nums) {
//   nums.sort((a, b) => a - b);
//   const result = [];
//   if (nums.length < 3) {
//     return [];
//   }
//   for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue;
//     }
//     let j = i + 1,
//       k = nums.length - 1;
//     let target = -nums[i];
//     while (j < k) {
//       let sum = nums[j] + nums[k];
//       if (sum > target) {
//         k--;
//       } else if (sum < target) {
//         j++;
//       } else {
//         result.push([nums[i], nums[j], nums[k]]);
//         while (j < k && nums[j] === nums[j + 1]) j++;
//         while (j < k && nums[k] === nums[k - 1]) k--;
//         j++;
//         k--;
//       }
//     }
//   }
//   return result;
// };
// var threeSum = function(nums) {
//     let n = nums.length;
//     let ans = new Set()
//     for(let i=0; i<n; i++){
//         for(let j=i+1; j<n; j++){
//             for(let k=j+1; k<n; k++){
//                 const sum = nums[i]+nums[j]+nums[k]
//                 if(sum === 0){
//                     const trip = [nums[i],nums[j],nums[k]].sort((a,b)=>a-b);
//                     ans.add(trip.toString())
//                 }
//             }
//         }
//     }
//     const result = Array.from(ans).map((str)=> str.split(',').map(Number));
//     return result;
// };

// var threeSum = function(nums) {
//     let n = nums.length;
//     let ans = [];

//     // Sort the array to make duplicate handling easier
//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < n; i++) {
//         // Skip duplicate i values
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         for (let j = i + 1; j < n; j++) {
//             // Skip duplicate j values
//             if (j > i + 1 && nums[j] === nums[j - 1]) continue;

//             for (let k = j + 1; k < n; k++) {
//                 // Skip duplicate k values
//                 if (k > j + 1 && nums[k] === nums[k - 1]) continue;

//                 const sum = nums[i] + nums[j] + nums[k];
//                 if (sum === 0) {
//                     ans.push([nums[i], nums[j], nums[k]]);
//                 }
//             }
//         }
//     }

//     console.log(ans);
//     return ans;
// };
var threeSum = function(nums) {
    let n = nums.length;
    let ans = [];

    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Step 2: Iterate over the array
    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate elements for i
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Step 3: Two pointers
        let j = i + 1;
        let k = n - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum === 0) {
                ans.push([nums[i], nums[j], nums[k]]);

                // Skip duplicates for j
                while (j < k && nums[j] === nums[j + 1]) j++;
                // Skip duplicates for k
                while (j < k && nums[k] === nums[k - 1]) k--;

                // Move both pointers inward
                j++;
                k--;
            }
            else if (sum < 0) {
                j++; // Increase sum
            } else {
                k--; // Decrease sum
            }
        }
    }

    return ans;
};


const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
