/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const bubbleSort = (arr) => {
    const n = arr.length;

    // Loop luar untuk melakukan iterasi
    for (let i = 0; i < n - 1; i++) {

        // Loop dalam untuk perbandingan
        for (let j = 0; j < n - i - 1; j++) {
            // Membandingkan elemen berdekatan
            if (arr[j] > arr[j + 1]) {
                // Tukar arr[j] dan arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
};

const selectionSort = (arr) => {
    let n = arr.length;

    // Loop luar untuk melakukan iterasi
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Cari elemen terkecil pada bagian yang belum diurutkan
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Tukar arr[i] dan arr[minIndex]
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
};

const insertionSort = (arr) => {
    let n = arr.length;

    // Dimulai dari elemen kedua (indeks 1)
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        // Geser elemen-elemen yang lebih besar ke posisi berikutnya
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Tempatkan elemen current pada posisi yang tepat
        arr[j + 1] = current;
    }

    return arr;
};

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    // Bagi array menjadi dua bagian
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Rekursif: Urutkan kedua bagian
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Gabungkan dua bagian yang telah diurutkan
    return merge(sortedLeft, sortedRight);
};

// Fungsi untuk menggabungkan dua array terurut menjadi satu array terurut
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

    // Sisa elemen pada kedua array
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const groupAnagrams = function(strs) {
    const anagram = {};

    for (const str of strs) {
        const sorted = mergeSort(str.split(""));

        if (!anagram[sorted]) {
            anagram[sorted] = [];
        }

        anagram[sorted].push(str);
    }

    return Object.values(anagram);
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
