function NGL(arr) {
    const stack = [];   
    const result = []; 

    for (let i = 0; i < arr.length; i++) {
        if (!stack.length) {
            result.push(-1)
        } else if (stack[stack.length - 1] > arr[i]) {
            result.push(stack[stack.length - 1])
        } else {
            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
            }
            if (!stack.length) {
                result.push(-1)
            } else {
                result.push(stack[stack.length - 1])
            }
        }
        stack.push(arr[i])
    }
    return result
}

const arr = [1, 3, 2, 4];
console.log(NGL(arr));
