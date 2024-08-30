function insertionSort(arr) {
  // Start from the second element since the first element is already sorted
  for (let i = 1; i < arr.length; i++) {
    // Store the current element in a variable
    let nti = arr[i];
    // Initialize j to be the index of the previous element
    let j = i - 1;
    // Shift elements of the sorted portion of the array to the right
    // until the correct position for nti is found
    while (j >= 0 && arr[j] > nti) {
      arr[j + 1] = arr[j]; // Move element one position to the right
      j--;
    }
    // Insert the current element into its correct position
    arr[j + 1] = nti;
  }
  // Return the sorted array
  return arr;
}
// Example usage
const arr = [14, 9, 15, 12, 6, 8, 13];
console.log(insertionSort(arr)); // Output: [6, 8, 9, 12, 13, 14, 15]
