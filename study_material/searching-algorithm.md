# Searching Algorithm

Algoritma pencarian (searching algorithm) adalah serangkaian langkah atau metode yang digunakan untuk menemukan keberadaan atau lokasi suatu elemen dalam himpunan data tertentu. Tujuan dari algoritma pencarian adalah untuk menemukan elemen yang dicari dengan efisien, terutama pada himpunan data yang besar.

Ada beberapa jenis algoritma pencarian yang umum digunakan, di antaranya:

## 1. Pencarian Linear (Sequential Search):
![image](https://github.com/user-attachments/assets/b7812964-8bb8-4129-8d68-9b8a0f81fab5)
Algoritma ini melakukan pencarian dengan cara mengunjungi setiap elemen dalam himpunan data satu per satu hingga elemen yang dicari ditemukan. Ini adalah pendekatan yang sederhana, tetapi kurang efisien untuk himpunan data besar karena memerlukan waktu linear dalam hal jumlah elemen.

algoritma ini sering kalian pakai di phase 0 secara tidak sadar. dan biasanya kalian menggukana double for loop untuk mencari sesuatu.
double for loop ini mengakibatkan 2x linear time complexity yaitu O(N²) — Quadratic

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
          return i; // Mengembalikan indeks elemen yang ditemukan
      }
  }
  return -1; // Mengembalikan -1 jika elemen tidak ditemukan
}
```

`Time Complexity: O(n) - Linear Time Complexity`

## 2. Pencarian Binary (Binary Search) :
![image](https://github.com/user-attachments/assets/04608fd5-2a45-4c12-bdb4-4997e30c8905)
Algoritma ini hanya dapat digunakan pada himpunan data yang sudah terurut. Pencarian dimulai dengan membandingkan elemen tengah himpunan data dengan elemen yang dicari. Berdasarkan hasil perbandingan, setengah himpunan data yang tidak mungkin mengandung elemen yang dicari dapat diabaikan. Hal ini menghasilkan waktu pencarian yang lebih cepat dibandingkan dengan pencarian linear. Binary search hanya memerlukan waktu logaritmik dalam hal jumlah elemen.

(Catatan: Binary search hanya berlaku pada himpunan data terurut)
```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return mid; // Mengembalikan indeks elemen yang ditemukan
    } else if (arr[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
  }
  return -1; // Mengembalikan -1 jika elemen tidak ditemukan
}
```
`Time Complexity: O(log n) - Logarithmic Time Complexity`


## 3. Pencarian Jump (Jump Search)
Algoritma ini juga digunakan pada himpunan data yang terurut. Ia melompati sejumlah elemen dalam setiap iterasinya, dengan langkah yang semakin pendek ketika elemen yang lebih dekat dengan elemen yang dicari ditemukan.

Pemahaman tentang algoritma pencarian sangat penting dalam ilmu komputer dan pemrograman karena banyak masalah yang melibatkan pencarian data dalam berbagai konteks. Pemilihan algoritma pencarian yang tepat dapat memberikan efisiensi yang lebih baik dalam menemukan elemen yang dicari.

(Catatan: Jump search berlaku pada himpunan data terurut)

```js
function jumpSearch(arr, target) {
  const n = arr.length;
  let step = Math.sqrt(n);
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.sqrt(n);
    if (prev >= n) {
        return -1;
    }
  }

  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) {
        return -1;
    }
  }

  if (arr[prev] === target) {
    return prev; // Mengembalikan indeks elemen yang ditemukan
  }

  return -1; // Mengembalikan -1 jika elemen tidak ditemukan
}
```
   
`Time Complexity: O(√n) - Square Root Time Complexity`







