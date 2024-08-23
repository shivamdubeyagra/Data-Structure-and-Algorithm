// const arr = [1, 3, 2, 4];
const arr = [1, 3, 0, 0, 1, 2, 4];

function Ngr(arr) {
  const stack = []; // 4 2 1
  const result = []; // -1 4 2
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!stack.length) {
      result.push(-1);
    } else if (stack[stack.length - 1] > arr[i]) {
      result.push(stack[stack.length - 1]);
    } else {
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        result.push(-1);
      } else {
        result.push(stack[stack.length - 1]);
      }
    }
    stack.push(arr[i]);
  }
  return result.reverse();
}
console.log(Ngr(arr));
