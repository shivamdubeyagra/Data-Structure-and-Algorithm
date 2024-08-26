function bubbleSort(arr){
    let n = arr.length;
    for(let i=n-1; i>=0; i--){
        let didSwap = 0
        for(let j=0; j<=i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                didSwap =1
            }
        }
        if(!didSwap){
            break;
        }
    }
    return arr
}
const arr = [13,46,24,52,20,9]
console.log(bubbleSort(arr));
