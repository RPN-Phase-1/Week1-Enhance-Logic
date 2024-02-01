function groupAnagrams(strs) {
  let result = {}
  for (let i = 0; i < strs.length; i++) {
    let sorted = bubbleSort([...strs[i]]) // eat > a,e,t; tan > a,n,t; bat > a,b,t
    // sorted = selectionSort([...strs[i]])
    // sorted = insertionSort([...strs[i]])
    // sorted = mergeSort([...strs[i]])
    !result[sorted] ? (result[sorted] = [strs[i]]) : result[sorted].push(strs[i]) // result[a,e,t] = ["eat", "tea", "ate"]...
  }
  return Object.values(result) // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
}

function bubbleSort(strs) {
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j] > strs[j + 1]) {
        let temp = strs[j]
        strs[j] = strs[j + 1]
        strs[j + 1] = temp
      }
    }
  }

  return strs
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }

  return arr
}

function insertionSort(arr) {
  let n = arr.length

  // Dimulai dari elemen kedua (indeks 1)
  for (let i = 1; i < n; i++) {
    let current = arr[i]
    let j = i - 1

    // Geser elemen-elemen yang lebih besar ke posisi berikutnya
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--
    }

    // Tempatkan elemen current pada posisi yang tepat
    arr[j + 1] = current
  }

  return arr
}

// Algoritma Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  // Bagi array menjadi dua bagian
  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  // Rekursif: Urutkan kedua bagian
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)

  // Gabungkan dua bagian yang telah diurutkan
  return merge(sortedLeft, sortedRight)
}

// Fungsi untuk menggabungkan dua array terurut menjadi satu array terurut
function merge(left, right) {
  let result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
console.log(groupAnagrams([""]))
// Output: [[""]]

// Test Case 3
console.log(groupAnagrams(["a"]))
// Output: [["a"]]

// Test Case 4
console.log(groupAnagrams(["listen", "silent", "hello", "world"]))
// Output: [["listen","silent"],["hello"],["world"]]

// Test Case 5
console.log(groupAnagrams(["rat", "tar", "art", "car"]))
// Output: [["rat","tar","art"],["car"]]

// Test Case 6
console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"]))
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// Test Case 7
console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"]))
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
