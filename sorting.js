/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  // Implementasi akan datang di sini
  let memo = {};
  let result = [];
  const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  for (let i = 0; i < strs.length; i++) {
    const sorted = bubbleSort([...strs[i]]);
    const sortedStr = sorted.join('');
    if (memo[sortedStr] === undefined) {
      memo[sortedStr] = result.length;
      result[memo[sortedStr]] = [strs[i]];
    } else {
      result[memo[sortedStr]].push(strs[i])
    }
  }
  return result;
};