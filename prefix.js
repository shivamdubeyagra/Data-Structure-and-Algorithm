// // const arr = [1, 2, 3, 4, 5];
// // const n = arr.length;
// // const prefixSum = new Array(n).fill(0);
// // const suffixSum = new Array(n).fill(0);
// // const result = new Array(n).fill(0);

// // // Compute prefix sum
// // prefixSum[0] = arr[0];
// // for (let i = 1; i < n; i++) {
// //     prefixSum[i] = prefixSum[i - 1] + arr[i];
// // }

// // // Compute suffix sum
// // suffixSum[n - 1] = arr[n - 1];
// // for (let i = n - 2; i >= 0; i--) {
// //     suffixSum[i] = suffixSum[i + 1] + arr[i];
// // }

// // // Compute result: sum except itself
// // for (let i = 0; i < n; i++) {
// //     const leftSum = i > 0 ? prefixSum[i - 1] : 0;
// //     const rightSum = i < n - 1 ? suffixSum[i + 1] : 0;
// //     result[i] = leftSum + rightSum;
// // }

// // console.log(result); // Output: [14, 13, 12, 11, 10]

// var productExceptSelf = function(nums) {
//     // const arr = [];
//     // for(let i=0; i<nums.length; i++){
//     //     let prod = null;
//     //     for(let j=i+1; j<nums.length; j++){
//     //         prod*=nums[j]
//     //     }
//     //     arr.push(prod)
//     // }
//     // return arr
//     const n = nums.length;
//     const prefixP = new Array(n).fill(1);
//     const suffixP = new Array(n).fill(1);
//     const result = new Array(n).fill(1);
//     prefixP[0] = nums[0];
//     for(let i=1; i<n; i++){
//         prefixP[i]= prefixP[i-1]*nums[i];
//     }
//     suffixP[n-1] = nums[n-1];
//     for(let i=n-2; i>=0; i--){
//         suffixP[i]=suffixP[i+1]*nums[i]
//     }
//     console.log(suffixP)
// };
// console.log(productExceptSelf([1,2,3,4]))

var productExceptSelf = function(nums) {
    const n = nums.length;
    
    // Step 1: Create prefix and suffix products
    const prefixP = new Array(n).fill(1);
    const suffixP = new Array(n).fill(1);
    const result = new Array(n).fill(1);

    // Step 2: Calculate prefix products
    prefixP[0] = nums[0];
    for (let i = 1; i < n; i++) {
        prefixP[i] = prefixP[i - 1] * nums[i];
    }

    // Step 3: Calculate suffix products
    suffixP[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixP[i] = suffixP[i + 1] * nums[i];
    }

    // Step 4: Compute result array
    result[0] = suffixP[1];  // First element
    result[n - 1] = prefixP[n - 2]; // Last element
    for (let i = 1; i < n - 1; i++) {
        console.log(prefixP[i - 1], suffixP[i + 1])
        result[i] = prefixP[i - 1] * suffixP[i + 1];
    }

    return result;
};
console.log(productExceptSelf([1,2,3,4]))