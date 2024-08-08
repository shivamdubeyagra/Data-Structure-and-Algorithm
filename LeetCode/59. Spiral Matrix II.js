/**Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

 

Example 1:


Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
Example 2:

Input: n = 1
Output: [[1]]
 

Constraints:

1 <= n <= 20
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = createMatrix(n);
  let top = 0,
    bottom = n - 1;
  let left = 0,
    right = n - 1;
  let dir = 0;
  let count = 1;

  while (top <= bottom && left <= right) {
    if (dir === 0) {
      for (let i = left; i <= right; i++) {
        matrix[top][i] = count++;
      }
      top++;
    } else if (dir === 1) {
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = count++;
      }
      right--;
    } else if (dir === 2) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = count++;
      }
      bottom--;
    } else {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = count++;
      }
      left++;
    }
    dir = (dir + 1) % 4;
  }

  return matrix;
};

function createMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }
  return matrix;
}
