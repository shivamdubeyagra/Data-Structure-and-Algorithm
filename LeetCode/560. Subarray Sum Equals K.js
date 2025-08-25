function subarraySum (arr,k){
    const map = new Map();
    let count =0, sum =0;
    map.set(0,1)
    for(let item of arr){
        sum+=item;
        if(map.has(sum-k)){
            count+=map.get(sum-k)
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;

}
const nums = [1,2,3], k = 3;
console.log(subarraySum(nums,k));