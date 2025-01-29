const arr = [1,2,4,4], sum =8;

let i =0;
let j = arr.length-1;

while(i<j){
    if(arr[i]+arr[j] === sum){
       console.log([i,j])
       break;
    }else if(arr[i]+arr[j] < sum){
        i++
    }else{
        j--;
    }
}
