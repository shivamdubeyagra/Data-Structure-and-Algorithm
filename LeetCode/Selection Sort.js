function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i <= n - 2; i++) {
    let min = i;
    for (let j = i + 1; j <= n - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

const arr = [0, -1, 3, -2, 2];
console.log(selectionSort(arr));
