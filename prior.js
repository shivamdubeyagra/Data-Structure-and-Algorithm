var topKFrequent = function(nums, k) {
    let hashMap = new Map();
    
    // Step 1: Count frequencies
    for (let num of nums) {
        hashMap.set(num, (hashMap.get(num) || 0) + 1);
    }
    
    // Step 2: Use Min Heap to store top k frequent elements
    let minHeap = [];
    
    for (let [num, freq] of hashMap) {
        minHeap.push([num, freq]); // Add element to heap
        minHeap.sort((a, b) => a[1] - b[1]); // Sort heap by frequency (ascending)

        // Maintain size k: Remove least frequent element
        if (minHeap.length > k) {
            minHeap.shift();
        }
    }
    
    // Step 3: Extract top k elements
    return minHeap.map(el => el[0]);
};

const nums = [1,1,1,2,2,3], k = 2

console.log(topKFrequent(nums, k)); // Output: [1,2]