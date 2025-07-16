// const nums = [2, 1, 5, 1, 3, 2], k = 3;

// function maxSum (arr,k) {
//     let winSum = 0;
//     let maxSum = 0;
//     let i =0;
//     let j = k-1;
//     while(i<arr.length -k){
//       while(i<= j){
//         winSum += arr[i];
//         i++;
//       }
//       j+=k-1
//       if(maxSum < winSum){
//         maxSum = winSum;
//       }   
//     }
//     return maxSum;

// }
const nums = [2, 1, 5, 1, 3, 2], k = 3;
// nums = [1, 2, 3, 1], k = 3

// function maxSum(arr, k) {
//     let winSum = 0;
//     let maxSum = 0;
//     let i = 0;
//     let j = 0;

//     while (j < arr.length) {
//         winSum += arr[j];

//         if (j - i + 1 === k) {
//             maxSum = Math.max(maxSum, winSum);
//             winSum -= arr[i];
//             i++;
//         }

//         j++;
//     }

//     return maxSum;
// }
// console.log(maxSum(nums, k)); // Output: 9
var containsNearbyDuplicate = function(nums, k) {
    let i = 0;
    let set = new Set();

    for (let j = 0; j < nums.length; j++) {
        if (set.has(nums[j])) return true;

        set.add(nums[j]);

        // Ensure window size stays <= k
        if (j - i >= k) {
            set.delete(nums[i]);
            i++;
        }
    }

    return false;
};


console.log(containsNearbyDuplicate(nums,k));
