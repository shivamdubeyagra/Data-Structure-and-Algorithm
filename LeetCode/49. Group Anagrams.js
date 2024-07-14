/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/
var groupAnagrams = function (strs) {
  const Obj = {};
  let result = [];
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].toLowerCase().split("").sort().join("");
    if (!Obj[sorted]) {
      Obj[sorted] = [strs[i]];
    } else {
      Obj[sorted].push(strs[i]);
    }
  }
  for (let key in Obj) {
    result.push(Obj[key]);
  }
  return result;
};
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
