/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  let arr = [];

  for (let i = 0; i < strs.length; i++) {
    arr.push([...strs[i]]);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length - 1; j++) {
      for (let k = 0; k < arr[i].length - j - 1; k++) {
        if (arr[i][k] > arr[i][k + 1]) {
          let temp = arr[i][k];
          arr[i][k] = arr[i][k + 1];
          arr[i][k + 1] = temp;
        }
      }
    }
  }

  let con = [];

  for (let i = 0; i < arr.length; i++) {
    let temp = "";
    for (let j = 0; j < arr[i].length; j++) {
      temp += arr[i][j];
    }
    con.push(temp);
  }

  const res = {};

  for (let i = 0; i < con.length; i++) {
    if (!res[con[i]]) {
      res[con[i]] = [];
    }
    res[con[i]].push(strs[i]);
  }

  return Object.values(res);
};

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
console.log(groupAnagrams([""]));
// Output: [[""]]

// Test Case 3
console.log(groupAnagrams(["a"]));
// Output: [["a"]]

// Test Case 4
console.log(groupAnagrams(["listen", "silent", "hello", "world"]));
// Output: [["listen","silent"],["hello"],["world"]]

// Test Case 5
console.log(groupAnagrams(["rat", "tar", "art", "car"]));
// Output: [["rat","tar","art"],["car"]]

// Test Case 6
console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"]));
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// Test Case 7
console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"]));
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
