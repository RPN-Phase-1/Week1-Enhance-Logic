/* Diberikan sebuah array dari string strs, kelompokkan anagram-anagram secara bersama-sama. Anda bisa mengembalikan jawaban dalam urutan apa pun.

Sebuah Anagram adalah kata atau frasa yang terbentuk dari pengurutan ulang huruf-huruf dari kata atau frasa lain yang berbeda, biasanya menggunakan semua huruf asli tepat sekali.

Contoh 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Contoh 2:
Input: strs = [""]

Output: [[""]]

Contoh 3:
Input: strs = ["a"]

Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] terdiri dari huruf-huruf kecil dalam bahasa Inggris.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Bubble Sort
function bubbleSort(str) {
  let arr = str.split("");
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr.join("");
}

//Selection Sort
function selectionSort(str) {
  let arr = str.split("");
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx != i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }
  return arr.join("");
}

//Insertion Sort
function insertionSort(str) {
  let arr = str.split("");
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr.join("");
}

//Quick Sort
function quickSort(str) {
  if (str.length <= 1) return str;
  let pivot = str.charAt(Math.floor(str.length / 2));
  let left = "";
  let right = "";
  for (let i = 0; i < str.length; i++) {
    if (i === Math.floor(str.length / 2)) continue;
    if (str[i] <= pivot) {
      left += str[i];
    } else {
      right += str[i];
    }
  }
  return quickSort(left) + pivot + quickSort(right);
}

const sortingAlgorithms = {
  bubbleSort: bubbleSort,
  selectionSort: selectionSort,
  insertionSort: insertionSort,
  quickSort: quickSort,
};

const groupAnagrams = function (strs, sortingAlgorithm) {
  const sortFunction = sortingAlgorithms[sortingAlgorithm]; // Memilih fungsi berdasarkan nama algoritma
  if (!sortFunction) {
    console.error("Sorting algorithm not found:", sortingAlgorithm);
    return;
  }

  const map = {};
  for (let str of strs) {
    const sortedStr = sortFunction(str);
    if (!map[sortedStr]) {
      map[sortedStr] = [];
    }
    map[sortedStr].push(str);
  }
  return Object.values(map);
};

// Test Case 1
console.log(
  "bubbleSort",
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"], "bubbleSort")
);
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
console.log("bubbleSort =>", groupAnagrams([""], "bubbleSort"));
// Output: [[""]]

// Test Case 3
console.log("selectionSort =>", groupAnagrams(["a"], "selectionSort"));
// Output: [["a"]]

// Test Case 4
console.log(
  "selectionSort =>",
  groupAnagrams(["listen", "silent", "hello", "world"], "selectionSort")
);
// Output: [["listen","silent"],["hello"],["world"]]

// Test Case 5
console.log(
  "insertionSort =>",
  groupAnagrams(["rat", "tar", "art", "car"], "insertionSort")
);
// Output: [["rat","tar","art"],["car"]]

// Test Case 6
console.log(
  "insertionSort =>",
  groupAnagrams(
    ["apple", "banana", "leapp", "grape", "orange"],
    "insertionSort"
  )
);
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// Test Case 7
console.log(
  "quickSort =>",
  groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"], "quickSort")
);
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]

// kerjakan 1 soal ini dengan 4 sorting algo yang kita sudah pelajarin, boleh kalian buat modular function setiap sorting dan implement ke groupAnagrams().
