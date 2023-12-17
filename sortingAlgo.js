/**\LOGIC NOLEP (sortingAlgo.js)
Diberikan sebuah array dari string strs, kelompokkan anagram-anagram secara bersama-sama. 
Anda bisa mengembalikan jawaban dalam urutan apa pun.

Sebuah Anagram adalah kata atau frasa yang terbentuk dari pengurutan ulang huruf-huruf dari kata atau frasa 
lain yang berbeda, biasanya menggunakan semua huruf asli tepat sekali. 

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

- 1 <= strs.length <= 104
- 0 <= strs[i].length <= 100
- strs[i] terdiri dari huruf-huruf kecil dalam bahasa Inggris.
*/

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */
// const groupAnagrams = function(strs) {
//   // Implementasi akan datang di sini
// };

// // Test Case 1
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
// // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// // Test Case 2
// console.log(groupAnagrams([""])); 
// // Output: [[""]]

// // Test Case 3
// console.log(groupAnagrams(["a"])); 
// // Output: [["a"]]

// // Test Case 4
// console.log(groupAnagrams(["listen", "silent", "hello", "world"])); 
// // Output: [["listen","silent"],["hello"],["world"]]

// // Test Case 5
// console.log(groupAnagrams(["rat", "tar", "art", "car"])); 
// // Output: [["rat","tar","art"],["car"]]

// // Test Case 6
// console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"])); 
// // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// // Test Case 7
// console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"])); 
// // Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]


/*kerjakan 1 soal ini dengan 4 sorting algo yang kita sudah pelajarin, boleh kalian buat modular 
function setiap sorting dan implement ke groupAnagrams()*/


function bubbleSort1(strs1){
    for (let i = 0; i < strs1.length; i++){
      for (let j = 0; j < strs1.length - i - 1; j++){
        if (strs1[j] > strs1[j + 1]){
            let result = strs1[j]
            strs1[j] = strs1[j + 1]
            strs1[j + 1] = result
        }
      }
    }
    return strs1
  }
  //   console.log(bubbleSort([13, 2, 5, 20, 16]))
  
  function selectionSort2(strs2){
    for (let i = 0; i < strs2.length ; i++){
        let min = i
  
        for (let j = i + 1; j < strs2.length; j++){
            if(strs2[j] < strs2[min]){
                min = j
            }
        }
        let result = strs2[i]
        strs2[i] = strs2[min]
        strs2[min] = result
    }
    return strs2
  }
  // console.log(selectionSort([12, 1, 3, 8, 5]))
  
  function insertionSort3(strs3){
    for (let i = 1; i < strs3.length; i++){
        for (let j = i - 1; j > -1; j--){
  
            if (strs3[j] > strs3[j + 1]){
                let result = strs3[j]
                strs3[j] = strs3[j + 1]
                strs3[j + 1] = result
            }
        }
    }
    return strs3
  }
  // console.log(insertionSort3([15, 11, 16, 12, 9]))
  
  
  function margeSort4(strs4){
    if (strs4.length <= 1){
        return strs4
    }
  
    const middle = Math.floor(strs4.length / 2)
    const left = strs4.slice(0, middle)
    const right = strs4.slice(middle)
  
    const leftSort = margeSort4(left)
    const rightSort = margeSort4(right)
  
    return marge4(leftSort, rightSort)
  }
  function marge4(left, right){
    let result = []
    let leftKiri = 0
    let rightKanan = 0
  
    while (leftKiri < left.length && rightKanan < right.length){
        if (left[leftKiri] < right[rightKanan]){
            result.push(left[leftKiri])
            leftKiri++
        } else {
            result.push(right[rightKanan])
            rightKanan++
        }
    }
  
    return result.concat(left.slice(leftKiri)).concat(right.slice(rightKanan))
  }
  // console.log(margeSort4([12, 9, 5, 20, 21]))
  
  
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  const groupAnagrams = function(strs, sorting) {
    // Implementasi akan datang di sini
  
    let obj = {}
    let arr = []
    for (let i = 0; i < strs.length; i++){
        const group1 = sorting(strs[i].split('')).join('')
        // console.log(group1)
        if (obj[group1]){
            obj[group1].push(strs[i])
        } else {
            obj[group1] = [strs[i]]
        }
    }
    for (const key in obj){
        arr.push(obj[key])
    }
    return arr
  };
  
  // Test Case 1
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"], bubbleSort1)); 
  // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  
  // Test Case 2
  console.log(groupAnagrams([""], bubbleSort1)); 
  // Output: [[""]]
  
  // Test Case 3
  console.log(groupAnagrams(["a"], bubbleSort1)); 
  // Output: [["a"]]
  
  // Test Case 4
  console.log(groupAnagrams(["listen", "silent", "hello", "world"], margeSort4)); 
  // Output: [["listen","silent"],["hello"],["world"]]
  
  // Test Case 5
  console.log(groupAnagrams(["rat", "tar", "art", "car"], margeSort4)); 
  // Output: [["rat","tar","art"],["car"]]
  
  // Test Case 6
  console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"], margeSort4)); 
  // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]
  
  // Test Case 7
  console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"], margeSort4)); 
  // Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
  
  
  