var containsNearbyDuplicate = function(nums, k) {
    const obj = {};
    for(let i=0; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = i;
        }else{
            const x = Math.abs(obj[nums[i]] - i);
            if(x<=k){
                return true;
            }
        }
    }
    return false;
};
const nums = [1,2,3,1], k = 3;
containsNearbyDuplicate(nums)