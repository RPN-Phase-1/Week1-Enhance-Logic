/* 
Sorting algorithm adalah suatu metode atau algoritma yang digunakan untuk mengurutkan elemen-elemen dalam suatu koleksi atau array dalam urutan tertentu, seperti urutan numerik atau urutan alfabet. Tujuan utama dari sorting algorithm adalah untuk mengatur data dalam suatu urutan tertentu sehingga memudahkan proses pencarian atau analisis lebih lanjut.

Berikut adalah implementasi dari 4 algoritma pengurutan (Bubble Sort, Selection Sort, Insertion Sort, dan merge sort) dalam JavaScript : 
*/

/* Bubble Sort:
Bubble Sort adalah algoritma pengurutan sederhana yang bekerja dengan membandingkan dan menukar elemen-elemen berpasangan jika diperlukan. Elemen-elemen yang lebih besar akan "menggelembung" ke akhir array secara perlahan. */

// Algoritma Bubble Sort

function bubbleSort(arr) {
  let n = arr.length;

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
}

let array = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array);
console.log("Array terurut:", array);

/* Selection Sort:
Selection Sort adalah algoritma pengurutan yang memilih elemen terkecil dari sisa array dan menukarkannya dengan elemen pertama dari array yang belum diurutkan. */

// Algoritma Selection Sort
function selectionSort(arr) {
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
}

let array2 = [64, 25, 12, 22, 11];
selectionSort(array2);
console.log("Array2 terurut:", array2);

/* Insertion Sort:
Insertion Sort bekerja dengan membandingkan setiap elemen dengan elemen-elemen sebelumnya dan memasukkannya ke posisi yang tepat dalam urutan yang sudah diurutkan. */

// Algoritma Insertion Sort
function insertionSort(arr) {
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
}

let array3 = [12, 11, 13, 5, 6];
insertionSort(array3);
console.log("Array3 terurut:", array3);

/* Merge Sort:
Merge Sort adalah algoritma pengurutan yang bekerja dengan cara membagi array menjadi dua bagian sama besar, mengurutkan masing-masing bagian secara terpisah, lalu menggabungkan kedua bagian yang telah diurutkan menjadi satu. */
// Algoritma Merge Sort
function mergeSort(arr) {
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
}

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

let array4 = [12, 11, 13, 5, 6, 7];
let sortedArray = mergeSort(array4);
console.log("Array4 terurut:", sortedArray);

/* Pada implementasi Merge Sort di atas, kita membagi array menjadi dua bagian secara rekursif, kemudian mengurutkan kedua bagian tersebut juga secara rekursif, dan akhirnya menggabungkan kedua bagian yang telah diurutkan menggunakan fungsi merge.

Algoritma Merge Sort memiliki kecepatan waktu yang konstan dan cocok untuk mengurutkan array dengan ukuran besar. Ini bekerja dengan membagi array menjadi bagian-bagian kecil, mengurutkan masing-masing bagian tersebut, dan kemudian menggabungkannya kembali secara terurut.
=======================================================================================================================
Time Complexity Sorting Algo
Bubble Sort:
Average Case: O(n^2)
Best Case: O(n) (ketika array sudah terurut)
Worst Case: O(n^2) (ketika array terbalik terurut)

Selection Sort:
Average Case: O(n^2)
Best Case: O(n^2)
Worst Case: O(n^2)

Insertion Sort:
Average Case: O(n^2)
Best Case: O(n) (ketika array sudah terurut)
Worst Case: O(n^2)

Merge Sort:
Average Case: O(n log n)
Best Case: O(n log n)
Worst Case: O(n log n)

Kompleksitas waktu untuk Bubble Sort, Selection Sort, dan Insertion Sort sangat tergantung pada jumlah elemen dalam array. Semakin banyak elemen, semakin lama waktu yang diperlukan untuk pengurutan.

Di sisi lain, Merge Sort memiliki kompleksitas waktu yang lebih baik karena membagi array menjadi bagian-bagian kecil dan kemudian menggabungkan mereka secara terurut. Oleh karena itu, Merge Sort lebih efisien untuk ukuran array yang lebih besar.

Penting untuk diingat bahwa ini adalah analisis kompleksitas waktu dalam teori. Pada implementasi praktis, faktor-faktor seperti overhead dari perbandingan dan pertukaran elemen, serta pengoptimalan compiler dan hardware, dapat mempengaruhi kinerja sebenarnya dari algoritma pengurutan. 
 */
