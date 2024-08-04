// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

var maxArea = function (height) {
  let n = height.length;
  //   for(let i=0; i<n; i++){
  //     for(let j=i+1; i<n; j++){
  //         let area = (j-i)*Math.min(height[i],height[j])
  //         mx = Math.max(mx,area)
  //     }
  //   }
  //   console.log(mx)
  let i = 0;
  let j = n - 1;
  let mx = -Infinity;
  while (i < j) {
    let area = (j - i) * Math.min(height[i], height[j]);
    mx = Math.max(mx, area);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return mx;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
