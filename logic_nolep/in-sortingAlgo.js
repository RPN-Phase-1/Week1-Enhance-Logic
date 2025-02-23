function bubbleSort(strs){
    n = strs.length;
    let huruf = strs.split("");
    
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - i - 1; j++){
            if (huruf[j] > huruf[j + 1]) {
                let temp = huruf[j];
                huruf[j] = huruf[j + 1];
                huruf[j + 1] = temp;
            }        
        }
    }
    return huruf.join("");
}

function selectionSort(strs) {
    let n = strs.length;
    let huruf = strs.split("");
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (huruf[j] < huruf[minIndex]) {
                minIndex = j;
            }
        }
        
        let temp = huruf[i];
        huruf[i] = huruf[minIndex];
        huruf[minIndex] = temp;
    }
    return huruf.join("");
}

function insertionSort(strs) {
    let n = strs.length;
    let huruf = strs.split("");
    
    for (let i = 1; i < n; i++) {
        let current = huruf[i];
        let j = i - 1;
        
        while (j >= 0 && huruf[j] > current) {
            huruf[j + 1] = huruf[j];
            j--;
        }
        
        huruf[j + 1] = current;
    }
    return huruf.join("");
}

function mergeSort(strs) {
    let huruf = strs.split("");
    if (huruf.length <= 1) {
        return strs;
    }
    
    const middle = Math.floor(huruf.length / 2);
    const left = huruf.slice(0, middle);
    const right = huruf.slice(middle);
    
    const sortedLeft = mergeSort(left.join(""));
    const sortedRight = mergeSort(right.join(""));
    
    return merge(sortedLeft.split(""), sortedRight.split("")).join("");
}
  
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const groupAnagrams = function(strs) {
    let ubah = new Map();

    strs.forEach(kata => {
        let key = mergeSort(kata); 
        if (!ubah.has(key)) {
            ubah.set(key, []);
        }
        ubah.get(key).push(kata);
    });
    return Array.from(ubah.values());
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