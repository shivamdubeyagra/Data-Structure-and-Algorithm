// const arr = [99, 44, 6, 2, 1];

function bubbleSort(array) {
    let n = array.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {  
        swapped = false; 

        for (let j = 0; j < n - i - 1; j++) {  
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true; 
            }
        }
        if (!swapped) break;
    }
    
    return array;
}
// console.log(bubbleSort(arr));

function selectionSort(array){
    let n = array.length;
    for(let i=0; i<n-1; i++){
        let min = i;
        for(let j=i+1; j<n; j++){
            if(array[j]<array[min]){
                min = j
            }
        }
        if(min !==i){
            let temp =array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}
// console.log(selectionSort(arr));

function insertionSort(array) {
    let n = array.length;
    for (let i = 1; i < n; i++) {
        let current = array[i]; 
        let j = i - 1; 

        // Move elements to the right if they are greater than the current element
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        
        // Insert the current element at the correct position
        array[j + 1] = current;
    }
    return array;
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// console.log(insertionSort(arr));


// Merge Sort Implementation in JavaScript
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: O(1) time, O(1) space
    }
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2); // O(1) time, O(1) space
    const leftHalf = arr.slice(0, mid); // O(n) time, O(n) space
    const rightHalf = arr.slice(mid); // O(n) time, O(n) space

    // Recursively sort both halves and merge them
    return merge(mergeSort(leftHalf), mergeSort(rightHalf)); // T(n) = 2T(n/2) + O(n)
}

// Helper function to merge two sorted arrays
function merge(left, right) {
    let sortedArray = []; // O(n) space
    let i = 0, j = 0;

    // Compare elements and merge them in sorted order
    while (i < left.length && j < right.length) { // O(n) time
        if (left[i] < right[j]) {
            sortedArray.push(left[i]); // O(1) time, O(1) space
            i++;
        } else {
            sortedArray.push(right[j]); // O(1) time, O(1) space
            j++;
        }
    }
    // Add any remaining elements from left and right arrays
    return [...sortedArray, ...left.slice(i), ...right.slice(j)]; // O(n) time, O(n) space
}
// Example Usage
const array = [5, 3, 8, 6,-1, 2, 7, 4, 1];
console.log("Sorted Array:", mergeSort(array)); // O(n log n) time, O(n) space



