const arr = [99, 44, 6, 2, 1];

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
console.log(bubbleSort(arr));

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
console.log(selectionSort(arr));

