/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

 */

var isValidSudoku = function (board) {
  const n = board.length;

  // Check rows
  for (let row = 0; row < n; row++) {
    const mySet = new Set();
    for (let col = 0; col < n; col++) {
      if (board[row][col] === ".") continue;
      if (mySet.has(board[row][col])) {
        return false;
      }
      mySet.add(board[row][col]);
    }
  }

  // Check columns
  for (let col = 0; col < n; col++) {
    const mySet = new Set();
    for (let row = 0; row < n; row++) {
      if (board[row][col] === ".") continue;
      if (mySet.has(board[row][col])) {
        return false;
      }
      mySet.add(board[row][col]);
    }
  }

  // Check 3x3 sub-boxes
  for (let sr = 0; sr < n; sr += 3) {
    let er = sr + 2;
    for (let sc = 0; sc < n; sc += 3) {
      let ec = sc + 2;
      if (!isValidBox(board, sr, er, sc, ec)) {
        return false;
      }
    }
  }
  return true;
};

function isValidBox(board, sr, er, sc, ec) {
  const mySet = new Set();
  for (let i = sr; i <= er; i++) {
    for (let j = sc; j <= ec; j++) {
      if (board[i][j] === ".") continue;
      if (mySet.has(board[i][j])) {
        return false;
      }
      mySet.add(board[i][j]);
    }
  }
  return true;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function ValidSudo(board) {
  const n = board.length;
  const mySet = new Set();

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (board[row][col] === ".") continue;
      const r = `${board[row][col]} in row ${row}`;
      const c = `${board[row][col]} in col ${col}`;
      const b = `${board[row][col]} in box ${Math.floor(row / 3)}-${Math.floor(
        col / 3
      )}`;

      if (mySet.has(r) || mySet.has(c) || mySet.has(b)) {
        return false;
      }

      mySet.add(r);
      mySet.add(c);
      mySet.add(b);
    }
  }
  // console.log(mySet);
  return true;
}
console.log(ValidSudo(board));
// console.log(isValidSudoku(board));
