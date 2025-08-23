//136. Single Number
const nums = [4,1,2,1,2];
const counts = new Map();
for (const num of nums) counts.set(num, (counts.get(num) ?? 0) + 1);
for (const [num, count] of counts) if (count === 1) console.log(num);
