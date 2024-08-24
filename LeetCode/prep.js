/*const arr = [1, 3, 2, 4];

function stack(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        result.push(arr[j]);
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(-1); // If no greater element is found, push -1
    }
  }
  return result;
}

console.log(stack(arr)); // Output: [3, 4, 4, -1]
*/

/*
const arr = [1,3,2,4];

const stack = [];  //  
const result = []; // -1,

for(let i=0; i<arr.length; i++){
  if(!stack.length){
    result.push(-1)
  }else if(stack[stack.length-1]> arr[i]){
    result.push(stack[stack.length-1])
  }else{
    while(stack.length >0 && stack[stack.length-1]<=arr[i]){
      stack.pop();
    }
    if(!stack.length){
      result.push(-1)
    }else{
      result.push(stack[stack.length-1])
    }
  }
  stack.push(arr[i])
}
console.log(result);
*/