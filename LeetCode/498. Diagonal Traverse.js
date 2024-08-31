/**
 * 
 * Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
Example 1:

Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
Example 2:

Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]
 
Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
-105 <= mat[i][j] <= 105
 */

var findDiagonalOrder = function (mat) {
  const m = mat.length,
    n = mat[0].length,
    Obj = {},
    result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!Obj[i + j]) {
        Obj[i + j] = [mat[i][j]];
      } else {
        Obj[i + j].push(mat[i][j]);
      }
    }
  }
  for (let key in Obj) {
    if (Number(key) % 2 === 0) {
      result.push(Obj[key].reverse());
    } else {
      result.push(Obj[key]);
    }
  }
  return result.flat();
};
const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const mat2 = [
  [1, 2],
  [3, 4],
];
console.log(findDiagonalOrder(mat2)); //Output: [1,2,4,7,5,3,6,8,9]
