function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let nti = arr[i];
    let j = i - 1;
    console.log(`outerLoop`, arr);
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j];
      console.log(`InnerLoop`, arr);
      j--;
    }
    arr[j + 1] = nti;
    console.log(`outerLoopB`, arr);
    console.log(`one iter over ..................`);
  }
  return arr;
}

const arr = [14, 9, 15, 12, 6, 8, 13];
// const arr = [-6, 20, 8, -2, 4];
// console.log("Hello World");

console.log(insertionSort(arr));
