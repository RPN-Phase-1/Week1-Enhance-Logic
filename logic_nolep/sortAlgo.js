const bubbleSort = (str) => {
    let arr = str.split('');
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr.join('');
};

const selectionSort = (str) => {
    let arr = str.split('');
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr.join('');
};

const insertionSort = (str) => {
    let arr = str.split('');
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
    return arr.join('');
};

const quickSort = (str) => {
    if (str.length <= 1) return str;
    let arr = str.split('');
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    return quickSort(left.join('')) + pivot + quickSort(right.join(''));
};
const groupAnagrams = (strs,sortingAlgorithm) => {
   let map = new Map();

   for(let str of strs){
    let sortedStr;
    if (sortingAlgorithm === "bubble") {
        sortedStr = bubbleSort(str);
    }else if(sortingAlgorithm === "selection"){
        sortedStr = selectionSort(str);
    }else if(sortingAlgorithm === "insertion"){
        sortedStr = insertionSort(str);
    }else if (sortingAlgorithm === "quick") {
        sortedStr = quickSort(str);
    }else{
        throw new Error("Unknown sorting Alogorithm");
    }
    if (!map.has(sortedStr)) {
        map.set(sortedStr,[]);
    }
    map.get(sortedStr).push(str);
   }
   return Array.from(map.values());
  };
  
  // Test Case 1
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"],"quick")); 
  // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  
  // Test Case 2
  console.log(groupAnagrams([""],"selection")); 
  // Output: [[""]]
  
  // Test Case 3
  console.log(groupAnagrams(["a"],"bubble")); 
  // Output: [["a"]]
  
  // Test Case 4
  console.log(groupAnagrams(["listen", "silent", "hello", "world"],"insertion")); 
  // Output: [["listen","silent"],["hello"],["world"]]
  
  // Test Case 5
  console.log(groupAnagrams(["rat", "tar", "art", "car"],"quick")); 
  // Output: [["rat","tar","art"],["car"]]
  
  // Test Case 6
  console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"],"bubble")); 
  // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]
  
  // Test Case 7
  console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"],"selection")); 
  // Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
  