let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2 = [2,3,4,4,5,11,12];
// union of two sorted arrays
function unionOfTwoSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    let union = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            // push only if it's not the same as last inserted
            if (union[union.length - 1] !== arr1[i]) {
                union.push(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (union[union.length - 1] !== arr2[j]) {
                union.push(arr2[j]);
            }
            j++;
        } else {
            // both same, push only one
            if (union[union.length - 1] !== arr1[i]) {
                union.push(arr1[i]);
            }
            i++;
            j++;
        }
    }

    // add leftovers of arr1
    while (i < arr1.length) {
        if (union[union.length - 1] !== arr1[i]) {
            union.push(arr1[i]);
        }
        i++;
    }

    // add leftovers of arr2
    while (j < arr2.length) {
        if (union[union.length - 1] !== arr2[j]) {
            union.push(arr2[j]);
        }
        j++;
    }

    return union;
}

console.log(unionOfTwoSortedArrays(arr1, arr2));
