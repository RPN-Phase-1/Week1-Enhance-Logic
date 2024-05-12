//! function bubbleSort
const bubbleSort = (str) => {
  let array = str.split("");
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return [array.join("")];
};

//! function selectionSort
const selectionSort = (str) => {
  let array = str.split("");
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        minIndex = j;
      }
    }
    if (min !== array[i]) {
      let temp = array[i];
      array[i] = min;
      array[minIndex] = temp;
    }
  }
  let result = array.join("");
  return result;
};

//! function Insertion Sort
const insertionSort = (str) => {
  //
  let array = str.split("");
  for (let i = 1; i < array.length; i++) {
    let num = array[i];
    for (let j = i; j >= 0; j--) {
      if (array[j - 1] > num) {
        array[j] = array[j - 1];
        array[j - 1] = num;
      }
    }
  }
  let result = array.join("");
  return result;
};

//! function mergeSort dan merge
//function merge
const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  result = result.concat(...left.slice(leftIndex)).concat(...right.slice(rightIndex));
  result = result.join("");
  return result;
};

//function mergeSort
const mergeSort = (str) => {
  let array = str.split("");
  let middle = Math.floor(array.length / 2);

  if (str.length <= 1) {
    return str;
  }

  let left = array.slice(0, middle);
  left = left.join("");
  let right = array.slice(middle);
  right = right.join("");

  return merge(mergeSort(left), mergeSort(right));
};

//! function groupAnagrams
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  // Algoritma Bubble Sort
  let bubbleSortResult = {};
  for (let i = 0; i < strs.length; i++) {
    if (!bubbleSortResult[bubbleSort(strs[i])]) {
      bubbleSortResult[bubbleSort(strs[i])] = [strs[i]];
    } else {
      bubbleSortResult[bubbleSort(strs[i])].push(strs[i]);
    }
  }
  bubbleSortResult = Object.values(bubbleSortResult);

  // Algoritma Selection Sort
  let selectionSortResult = {};
  for (let i = 0; i < strs.length; i++) {
    if (!selectionSortResult[selectionSort(strs[i])]) {
      selectionSortResult[selectionSort(strs[i])] = [strs[i]];
    } else {
      selectionSortResult[selectionSort(strs[i])].push(strs[i]);
    }
  }
  selectionSortResult = Object.values(selectionSortResult);

  // Algoritma Insertion Sort
  let insertionSortResult = {};
  for (let i = 0; i < strs.length; i++) {
    if (!insertionSortResult[insertionSort(strs[i])]) {
      insertionSortResult[insertionSort(strs[i])] = [strs[i]];
    } else {
      insertionSortResult[insertionSort(strs[i])].push(strs[i]);
    }
  }
  insertionSortResult = Object.values(insertionSortResult);

  // Algoritma Merge Sort
  let mergeSortResult = {};
  for (let i = 0; i < strs.length; i++) {
    if (!mergeSortResult[mergeSort(strs[i])]) {
      mergeSortResult[mergeSort(strs[i])] = [strs[i]];
    } else {
      mergeSortResult[mergeSort(strs[i])].push(strs[i]);
    }
  }
  mergeSortResult = Object.values(mergeSortResult);

  // cetak ke console
  let print = { bubbleSort: bubbleSortResult, selectionSort: selectionSortResult, insertionSort: insertionSortResult, mergeSort: mergeSortResult };
  for (const key in print) {
    console.log(`${key} :`);
    console.log(print[key]);
  }
  return "";
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
