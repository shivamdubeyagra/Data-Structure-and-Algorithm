var rearrangeArray = function(nums) {
    /*
    const parr = [];
    const narr = [];
    const res = [];
    let i=0,j=0;
    for(const num of nums) num < 0 ? narr.push(num) : parr.push(num);
    while(i<parr.length && j<narr.length){
     res.push(parr[i++]);
     res.push(narr[j++]);
    };
    return res; 
    */
    const result = [];
    let i=0,j=1;
    for(const num of nums){
        if(num >0){
            result[i] = num;
            i+=2
        }else{
            result[j] = num;
            j+=2;
        }
    } 
    return result;
};
// rearrange Array Elements by Sign

console.log(rearrangeArray([3,1,-2,-5,2,-4]));
